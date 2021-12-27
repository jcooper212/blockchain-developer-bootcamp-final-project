'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DAOToken = require('../eth.hardhat/artifacts/contracts/DaoPayTreasury.sol/DAOToken.json');

var _DAOToken2 = _interopRequireDefault(_DAOToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(_DAOToken2.default.abi, address);
};
//import CampaignFactory from './build/contracts/CampaignFactory.json';
//import DaoWorkstream from './build/contracts/DaoWorkstream.json';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9kYW90b2tlbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRGFvVG9rZW4iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJhYmkiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBVTs7OztBQUdqQixBQUFPLEFBQWMsQUFFckI7Ozs7OztrQkFBZSxVQUFBLEFBQUMsU0FBVyxBQUN6QjtTQUFPLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUNoQixtQkFERyxBQUNNLEtBRGIsQUFBTyxBQUVMLEFBQ0g7QUFKRDtBQUpBO0FBQ0EiLCJmaWxlIjoiZGFvdG9rZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=