'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DaoWorkstream = require('../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DaoWorkstream.json');

var _DaoWorkstream2 = _interopRequireDefault(_DaoWorkstream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(_DaoWorkstream2.default.abi, address);
};
//import CampaignFactory from './build/contracts/CampaignFactory.json';
//import DaoWorkstream from './build/contracts/DaoWorkstream.json';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC93b3Jrc3RyZWFtLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJEYW9Xb3Jrc3RyZWFtIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiYWJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFHakIsQUFBTyxBQUFtQixBQUUxQjs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxTQUFXLEFBQ3pCO1NBQU8sSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQ2hCLHdCQURHLEFBQ1csS0FEbEIsQUFBTyxBQUVMLEFBQ0g7QUFKRDtBQUpBO0FBQ0EiLCJmaWxlIjoid29ya3N0cmVhbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==