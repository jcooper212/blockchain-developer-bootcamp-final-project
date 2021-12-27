pragma solidity =0.8.10;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import "hardhat/console.sol";



//The DAO Token ERC20 contract (DAOT) which will be used to pay contributors and suppliers of the DAO
contract DAOToken is ERC20 {
  address public admin;

  constructor() ERC20('DAO Token', 'DAOT'){
    admin = msg.sender;
  }

  function mint(address to, uint amount) external{
    require(msg.sender == admin, 'only admin');
    _mint(to, amount);
  }
}

//The DaoPayTreasury Factory which is able to create DaoWorkstreams and authorize payment to contributors from the community Treasury in DAOToken (DAOT)
contract DaoPayTreasury {
    address public owner;
    uint public supplyDaoToken;
    DAOToken public daoToken;
    address [] public listDaoWorkstreams;
    string  [] public listDaoWorkstreamNames;

    //Events
    event NewWorkstream(string str);
    event PaidContributor(address rcp, uint amount);

    //modifiers
    modifier restricted(){
        require(msg.sender == owner,'only admin');
        _;
    }

    constructor(uint _supplyDaoToken) {
        owner = msg.sender;
        supplyDaoToken = _supplyDaoToken;
        daoToken = new DAOToken();
        daoToken.mint(owner, supplyDaoToken);
    }
    //Create a DaoWorkstream
    function createDaoWorkstream(string memory _workstreamName, address _workstreamOwner) restricted() external returns (address) {
        DaoWorkstream newWk = new DaoWorkstream(_workstreamName, owner, _workstreamOwner, payable(address(daoToken)));
        listDaoWorkstreams.push(address(newWk));
        listDaoWorkstreamNames.push(_workstreamName);
        emit NewWorkstream(_workstreamName);
        return address(newWk);
    }

    function getDaoWorkstreams() public view returns (address[] memory){
        return listDaoWorkstreams;
    }
    function getDaoWorkstreamNames() public view returns (string[] memory){
        return listDaoWorkstreamNames;
    }
    function getDaoToken()  external view returns (address){
        return (address(daoToken));
    }
    function getDaoTokenOwnerBalance()  external view returns (address, address, uint){
        return (address(daoToken), address(this), daoToken.balanceOf(owner));
    }

    function payContributor(address payable to, uint amount) restricted() external  {
      bool sent = daoToken.transferFrom(owner, to, amount);
      require(sent, "Token transfer failed");
      emit PaidContributor(to, amount);
    }
    function payContributorRequest(address workstreamAddr, uint index) restricted() external  {
      DaoWorkstream dw = DaoWorkstream(workstreamAddr);
      bool sent = daoToken.transferFrom(owner, dw.getRequestRecipient(index), dw.getRequestValue(index));
      require(sent, "Token transfer failed");
      dw.payRequest(index);
      emit PaidContributor(dw.getRequestRecipient(index), dw.getRequestValue(index));
    }
}

//DaoWorkstream is the contract which holds the requests from contributors for payment and approves them to be paid from community treasury in DAOToken (DAOT)
contract DaoWorkstream {
    address workstreamOwner;
    address daoOwner;
    string public workstreamName;
    address payable public daoToken;

    struct Request {
        uint id;
        string description;
        uint value;
        address payable recipient;
        bool approved;
        bool paid;
    }
    Request[] public requests;
    uint public totalBalance;
    uint public pendingBalance;
    uint public pendingRequestCount;

    //Events
    event NewRequest(string str, uint value);
    event ApprovedRequest(string str, uint value);
    event PaidRequest(string str, uint value);

    //Modifiers
    modifier restricted(){
        require(msg.sender == daoOwner,'only dao owner');
        _;
    }
    modifier authorizeApproval(){
        require(msg.sender == workstreamOwner,'only workstreamowner can authorize approval');
        _;
    }

    modifier isApproved(bool _approved){
      require(_approved == true, 'NOT approved');
      _;
    }

    constructor(string memory _workstreamName, address _daoOwner, address _workstreamOwner, address payable _daoToken){
        daoOwner = _daoOwner;
        workstreamName = _workstreamName;
        daoToken = _daoToken;
        workstreamOwner = _workstreamOwner;
    }
    function getWorkstreamOwner() external view returns(address)
    {
        return workstreamOwner;
    }
    function getDaoOwner() external view returns(address)
    {
        return daoOwner;
    }
    function getWorkstreamName() external view returns(string memory){
      return workstreamName;
    }

    function execPayment(address payable to, uint amount)  public
    {
        IERC20(daoToken).transferFrom(daoOwner, to, amount);
    }
    function balance() external view returns(uint){
      return (IERC20(daoToken).balanceOf(daoOwner));
    }
    function getSummary() external view returns (string memory, address, uint, uint, uint, uint) {
      return (
        workstreamName, workstreamOwner, pendingRequestCount, requests.length, pendingBalance, totalBalance
      );
    }
    function getRequest(uint i) external view returns (uint id, string memory, address, uint, bool, bool) {
      return (
        requests[i].id, requests[i].description, requests[i].recipient, requests[i].value, requests[i].approved, requests[i].paid
      );
    }
    function getRequestLength() external view returns (uint){
      return(requests.length);
    }
    function getRequestRecipient(uint i) external  view returns (address){
      return (requests[i].recipient);
    }
    function getRequestValue(uint i) external  view returns (uint){
      return (requests[i].value);
    }
    function createRequest(string memory description, uint value, address payable recipient) public  {
        Request memory newReq = Request({
           id: requests.length,
           description: description,
           value: value,
           recipient: recipient,
           approved: false,
           paid: false
        });
        totalBalance += value;
        pendingBalance += value;
        pendingRequestCount += 1;
        requests.push(newReq);
        emit NewRequest(description, value);
    }
    function approveRequest(uint index) authorizeApproval() external {
        requests[index].approved = true;
        //pay the recipeient
        //Upon success
        //pendingBalance -= requests[index].value;
        pendingRequestCount -= 1;
        emit ApprovedRequest(requests[index].description, requests[index].value);

    }
    function payRequest(uint index) isApproved(requests[index].approved) external returns (bool){
        requests[index].paid = true;
        //pay the recipeient
        //execPayment(requests[index].recipient, requests[index].value);
        //Upon success
        pendingBalance -= requests[index].value;
        emit PaidRequest(requests[index].description, requests[index].value);
        return true;
    }
    function payExecRequest(uint index) isApproved(requests[index].approved) external returns (bool){
        requests[index].paid = true;
        //pay the recipeient
        execPayment(requests[index].recipient, requests[index].value);
        //Upon success
        pendingBalance -= requests[index].value;
        emit PaidRequest(requests[index].description, requests[index].value);
        return true;
    }
}
