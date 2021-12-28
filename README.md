# blockchain-developer-bootcamp-final-project
DaoPayTreasury - Management of DAO Payments

# DaoPayTreasury
## Problem Statement
DAOs are in their early phases of development. One of the challenges faced by DAOs is managing their contributor's payments. There are 1000s of individual contributors that make up the DAO. Contributors of the DAO typically work on items for the DAO and then are paid in the native token of the DAO. Currently most DAOs manage this on an adhoc manual basis. This creates reconciliation and transparency issues for the DAO.

## The Solution
DaoPayTreasury solves this by creating a workflow for paying DAO contributors with its native ERC20 token DAOToken (DAOT).
DAOPayTreasury specifically deals with the Treasury Payments challenge of DAOs. Most DAOs are governed by underlying workstreams. DAOPayTreasury enables a DAO to create custom workstreams (Business Development, Engineering, Finance, Growth etc). The contributors of a workstream can create a payment request which will then get approved by the workstream lead, and paid by DAO Treasury Owner/Signer.


## User interaction
- The deployer of the contract is the DAO owner. Only they can do certain functions like (a)create a new DAO workstream (b) MAke Payments
- The deployer (for sake of convenience of this project) will also issue the DAOToken with a parameterized supply during deployment
- Anyone can create a new payment request
- Each payment request needs to be approved and then paid.
- The worksteram owner is the only one that is Authorized to approve the request
- The DAO owner (one who deployed the contract) is the only one that can make a payment

## Contracts
- DAOToken - The native token of the DAO
- DaoPayTreasury - The main DAOPayTreasury governence contract - this also acts as a factory contract to produce new DAOWorkstreams dynamically requested by the daoOwner
- DaoWorkstream - This is a workstream which will hold a list of payment requests for the contributors


## ENV VARIABLES (REQUIRED to be set prior to running)
- ETH_WALLET_MNEMONIC=...privatekey mnemonic
- ETH_INFURA_RINKEBY=...infura_endpoint
- ETH_P=...privatekey
- DAOPAYTREASURY_ROOT='/Users/xyz/..../blockchain-developer-bootcamp-final-project' //(your PROJECT_ROOT)
- PORT='port' //to run this at

## Folder Structure
Here is a list of important folders and their description.

| Folder                       | Description                                            |
|:-----------------------------|:-------------------------------------------------------|
| `components`                 | Common Header & Layout React components                |
| `eth`                        | Common files used across the react pages               |
| `eth.hardhat/contracts`      | Smart contracts                                        |
| `eth.hardhat/test`           | tests                                                  |
| `pages`                      | Main React pages                                       |
| `pages/workstreams`          | Workstream pages                                       |

## QUICK Start with limited functionality (cause you will not be the daoOwner)
- setup ENV VARS listed above
- cd PROJECT_ROOT
- npm run dev

## Start with all functionality
- setup ENV VARS listed above
- cd PROJECT_ROOT/eth.hardhat
- hh clean
- hh run scripts/2_deploy_contracts.js --network rinkeby
- cd PROJECT_ROOT
- npm run dev

## Run the tests
- steps to run the test require additional 2 environment variables setup
- ETH_W1=...wallet address of deployer and _daoOwner
- ETH_W2=...wallet address of the worksteam owner
- cd PROJECT_ROOT/eth.hardhat
- hh test

## Test results
DaoPayTreasury
dao owner is:  
    ✓ Should return the new DaoPayTreasury with 2 workstreams (1485ms)
dao owner / bal  0xDE6704A8BdD05fdF4bb85fE33d6E31438729f1b0 0x25392E05dD01c615F058eA5332C3202Dd08efC36 BigNumber { _hex: '0x03e8', _isBigN
umber: true }
    ✓ Token and approvals for 2 workstreams (64ms)
    ✓ Validate 2 workstreams
    ✓ Create 2 requests on bizdev (58ms)
    ✓ Check balances
    ✓ Approve and pay requests - bizdev (41ms)
    ✓ Check balances after adding a new request
    ✓ Check balances after adding a new request - engg
    ✓ approve and pay request - engg (38ms)

    9 passing (2s)

## Roles
- DAO Owner - Creator & Deployer of DaoPayTreasury contract (only role that can create a worksteram & make payments in DAOT)
- Workstream Owner - Will be assigned by the DAO Owner when a workstream is created. (only role that can approve a payment request from a contributor)
- ALL - Can view the entire application. Anyone can also create a payment request

## Wallet Address for earning NFT of class completion
- 0xA1cAd9f755E3fbD16cDcd13bA362905c3390E4B0

## Link to live app (please note - since you are not the DAO Owner or Worktraem owner, you can navigate & view app & only request a payment)
- https://daopaytreasury.pagekite.me/

## Loom screencast recording of DaoPayTreasury project
- https://www.loom.com/share/1e3889c4171449b8a1b77fd124fdd860
