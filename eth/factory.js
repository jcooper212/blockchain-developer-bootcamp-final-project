import web3 from './web3';
//import DaoPayTreasury from './build/contracts/DaoPayTreasury.json';
import DaoPayTreasury from '../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DaoPayTreasury.json';
import DaoPayTreasury_address from '../DAOPAYTREASURY_ContractAddress.json';


console.log('contract address is : ',DaoPayTreasury_address.DAOPAYTREASURY_ContractAddress);

const instance = new web3.eth.Contract(
  DaoPayTreasury.abi,
  DaoPayTreasury_address.DAOPAYTREASURY_ContractAddress);
//  '0x54e889149FD3FAdA59d1136576c0338365B50D21');
//  '0x0E570d2E9c9fFECC7B03aCDCc007Aeb38283935A');
//  '0xD5f834b6AB48dE8b8D695D2fFD6f0380B9F97cB5');
//  '0x12684f987d66cBf25A8Eb8edfCA3a63AAA117011'); //v4
//  '0xe77187e518500d43FC9C628938d9529A3F873D32');
//  '0x077EfF2928905fb1D312A4fF32da84D06B42A5d4'); //v3
//  '0xfe52dC541255CCF56F009628d237c0184C2f8B76'); //v2
  //  '0xE625BeFEA3D0e949E3D5c7A795872c73BDfA4c02'); //v1
//console.log("instance is ", instance);
export default instance;


// DefiWallieFactory 0xab961258F23f1e316A94640E6CFf0B0448FB81b4
// CampaignFactory 0x4bC10AdcccDD87c8A7Cea8A002dF1B8C62932813
// DaoPayTreasury 0xE625BeFEA3D0e949E3D5c7A795872c73BDfA4c02
