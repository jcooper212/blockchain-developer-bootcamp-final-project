"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
var infura_endpoint = process.env.ETH_INFURA_RINKEBY;
var prkey = process.env.ETH_P;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new _web2.default(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider(infura_endpoint);
  web3 = new _web2.default(provider);
  web3.eth.accounts.wallet.add(prkey);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC93ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwiaW5mdXJhX2VuZHBvaW50IiwicHJvY2VzcyIsImVudiIsIkVUSF9JTkZVUkFfUklOS0VCWSIsInBya2V5IiwiRVRIX1AiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsImV0aCIsImFjY291bnRzIiwid2FsbGV0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjtBQUNBLElBQU0sa0JBQWtCLFFBQVEsQUFBUixJQUFZLEFBQXBDO0FBQ0EsSUFBTSxRQUFRLFFBQVEsQUFBUixJQUFZLEFBQTFCOztBQUdBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLGFBQTJCLEFBQWhFLGFBQTZFLEFBQzNFO0FBQ0E7U0FBTyxBQUFQLFNBQWdCLEFBQWhCLFFBQXdCLEVBQUUsUUFBUSxBQUFWLEFBQXhCLEFBQ0E7U0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFoQixBQUFQLEFBQ0Q7QUFKRCxPQUlPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUFnQyxBQUFoQyxBQUFqQixBQUNBO1NBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNBO09BQUssQUFBTCxJQUFTLEFBQVQsU0FBa0IsQUFBbEIsT0FBeUIsQUFBekIsSUFBNkIsQUFBN0IsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pjb29wZXIvcHkvY3J5cHRvL2NvbnNlbnN5cy9ibG9ja2NoYWluLWRldmVsb3Blci1ib290Y2FtcC1maW5hbC1wcm9qZWN0In0=