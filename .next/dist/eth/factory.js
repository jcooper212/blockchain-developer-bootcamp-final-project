'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DaoPayTreasury = require('../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DaoPayTreasury.json');

var _DaoPayTreasury2 = _interopRequireDefault(_DaoPayTreasury);

var _DAOPAYTREASURY_ContractAddress = require('../DAOPAYTREASURY_ContractAddress.json');

var _DAOPAYTREASURY_ContractAddress2 = _interopRequireDefault(_DAOPAYTREASURY_ContractAddress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import DaoPayTreasury from './build/contracts/DaoPayTreasury.json';
console.log('contract address is : ', _DAOPAYTREASURY_ContractAddress2.default.DAOPAYTREASURY_ContractAddress);

var instance = new _web2.default.eth.Contract(_DaoPayTreasury2.default.abi, _DAOPAYTREASURY_ContractAddress2.default.DAOPAYTREASURY_ContractAddress);
//  '0x54e889149FD3FAdA59d1136576c0338365B50D21');
//  '0x0E570d2E9c9fFECC7B03aCDCc007Aeb38283935A');
//  '0xD5f834b6AB48dE8b8D695D2fFD6f0380B9F97cB5');
//  '0x12684f987d66cBf25A8Eb8edfCA3a63AAA117011'); //v4
//  '0xe77187e518500d43FC9C628938d9529A3F873D32');
//  '0x077EfF2928905fb1D312A4fF32da84D06B42A5d4'); //v3
//  '0xfe52dC541255CCF56F009628d237c0184C2f8B76'); //v2
//  '0xE625BeFEA3D0e949E3D5c7A795872c73BDfA4c02'); //v1
//console.log("instance is ", instance);
exports.default = instance;

// DefiWallieFactory 0xab961258F23f1e316A94640E6CFf0B0448FB81b4
// CampaignFactory 0x4bC10AdcccDD87c8A7Cea8A002dF1B8C62932813
// DaoPayTreasury 0xE625BeFEA3D0e949E3D5c7A795872c73BDfA4c02
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJEYW9QYXlUcmVhc3VyeSIsIkRhb1BheVRyZWFzdXJ5X2FkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiREFPUEFZVFJFQVNVUllfQ29udHJhY3RBZGRyZXNzIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsImFiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUE0Qjs7Ozs7O0FBRm5DO0FBS0EsUUFBQSxBQUFRLElBQVIsQUFBWSwwQkFBeUIseUNBQXJDLEFBQTREOztBQUU1RCxJQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQzVCLHlCQURlLEFBQ0EsS0FDZix5Q0FGRixBQUFpQixBQUVRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0U7QUFDRixBQUNBO2tCQUFBLEFBQWU7O0FBR2Y7QUFDQTtBQUNBIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=