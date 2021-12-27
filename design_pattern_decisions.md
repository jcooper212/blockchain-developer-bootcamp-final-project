# design pattern decisions - blockchain-developer-bootcamp-final-project

## Design Pattern #1
## Inter-Contract Execution (Calling functions in external contracts) Inter-Contract Execution, Part 1 and Part 2

This is exhibited in the following solidity function createDaoWorkstream of DaoPayTreasury contract: 


##Design Pattern #2
##Inheritance and Interfaces (Importing and extending contracts and/or using contract interfaces) Inheritances and Interfaces — (note: this is already a requirement in the final project, so you can simply describe which library or interface you use)

This is exhibited in the following solidity function:

contract DAOToken is ERC20 {
  address public admin;

  constructor() ERC20('DAO Token', 'DAOT'){
    admin = msg.sender;
  }
