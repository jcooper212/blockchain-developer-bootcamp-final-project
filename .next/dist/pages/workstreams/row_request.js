'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../eth/factory');

var _factory2 = _interopRequireDefault(_factory);

var _workstream = require('../../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _daotoken = require('../../eth/daotoken.js');

var _daotoken2 = _interopRequireDefault(_daotoken);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/row_request.js';


var RequestRow = function (_Component) {
  (0, _inherits3.default)(RequestRow, _Component);

  function RequestRow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      loadingPay: false,
      errorMessagePay: '',
      loadingApprove: false,
      errorMessageApprove: ''
    }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var workstream, accounts, wko;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              console.log('onapprove');
              workstream = (0, _workstream2.default)(_this.props.address);

              _this.setState({ loadingApprove: true, errorMessageApprove: '' });
              _context.prev = 4;
              _context.next = 7;
              return _web2.default.eth.getAccounts();

            case 7:
              accounts = _context.sent;
              _context.next = 10;
              return workstream.methods.getWorkstreamOwner();

            case 10:
              wko = _context.sent;
              _context.next = 13;
              return workstream.methods.approveRequest(_this.props.request.id).send({ from: accounts[0] });

            case 13:
              console.log("approve ", _this.props.address, "acct ", accounts[0]);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](4);

              _this.setState({ errorMessageApprove: _context.t0.message });

            case 19:
              _this.setState({ loadingApprove: false });
              _routes.Router.pushRoute('/workstreams/' + _this.props.address + '/requests');

            case 21:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[4, 16]]);
    })), _this.onPay = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var workstream, accounts, tokenAddr, res, dtokenAddr, factoryAddr, daoBal, daotoken, approveRes, paidBool;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              console.log('onpay');
              workstream = (0, _workstream2.default)(_this.props.address);

              _this.setState({ loadingPay: true, errorMessagePay: '' });
              _context2.prev = 4;
              _context2.next = 7;
              return _web2.default.eth.getAccounts();

            case 7:
              accounts = _context2.sent;
              _context2.next = 10;
              return workstream.methods.daoToken().call();

            case 10:
              tokenAddr = _context2.sent;
              _context2.next = 13;
              return _factory2.default.methods.getDaoTokenOwnerBalance().call();

            case 13:
              res = _context2.sent;
              dtokenAddr = res[0];
              factoryAddr = res[1];
              daoBal = res[2];
              daotoken = (0, _daotoken2.default)(tokenAddr);
              _context2.next = 20;
              return daotoken.methods.approve(factoryAddr, daoBal).send({ from: accounts[0] });

            case 20:
              approveRes = _context2.sent;
              _context2.next = 23;
              return _factory2.default.methods.payContributor(_this.props.request.recipient, _this.props.request.value).send({ from: accounts[0] });

            case 23:
              paidBool = workstream.methods.payRequest(_this.props.request.id).send({ from: accounts[0] });
              //if (paidBool.toString() == "true"){
              //    await factory.methods.payContributor(this.props.request.recipient, this.props.request.value).send({from: accounts[0]});
              //  }
              //  else {
              //    this.setState({errorMessagePay: err.message});
              //  }
              //await factory.methods.payContributorRequest(this.props,address, this.props.request.id).send({from: accounts[0]});

              _context2.next = 29;
              break;

            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2['catch'](4);

              _this.setState({ errorMessagePay: _context2.t0.message });

            case 29:
              _this.setState({ loadingPay: false });
              _routes.Router.pushRoute('/workstreams/' + _this.props.address);

            case 31:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2, [[4, 26]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestRow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;

      return _react2.default.createElement(Row, { disabled: this.props.request.paid, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.props.request.id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, this.props.request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.props.request.value), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.props.request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, String(this.props.request.approved)), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.props.request.approved ? false : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'red', loading: this.state.loadingApprove, onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, this.props.request.paid ? false : _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', loading: this.state.loadingPay, onClick: this.onPay, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, ' Pay ')));
    }
  }]);

  return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL3Jvd19yZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiZmFjdG9yeSIsIldvcmtzdHJlYW0iLCJ3ZWIzIiwiRGFvdG9rZW4iLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJUYWJsZSIsIk1lc3NhZ2UiLCJMaW5rIiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZ1BheSIsImVycm9yTWVzc2FnZVBheSIsImxvYWRpbmdBcHByb3ZlIiwiZXJyb3JNZXNzYWdlQXBwcm92ZSIsIm9uQXBwcm92ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwid29ya3N0cmVhbSIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRXb3Jrc3RyZWFtT3duZXIiLCJ3a28iLCJhcHByb3ZlUmVxdWVzdCIsInJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInB1c2hSb3V0ZSIsIm9uUGF5IiwiZGFvVG9rZW4iLCJjYWxsIiwidG9rZW5BZGRyIiwiZ2V0RGFvVG9rZW5Pd25lckJhbGFuY2UiLCJyZXMiLCJkdG9rZW5BZGRyIiwiZmFjdG9yeUFkZHIiLCJkYW9CYWwiLCJkYW90b2tlbiIsImFwcHJvdmUiLCJhcHByb3ZlUmVzIiwicGF5Q29udHJpYnV0b3IiLCJyZWNpcGllbnQiLCJ2YWx1ZSIsInBhaWRCb29sIiwicGF5UmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJwYWlkIiwiZGVzY3JpcHRpb24iLCJTdHJpbmciLCJhcHByb3ZlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFnQjs7OztBQUN2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QUFQO0FBQUEsZ0JBQWMsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUwzQixBQUtFLEFBQU8sQUFBMEIsQUFDakMsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFdBQW5CLEFBQThCLHdCQUMvQixBQUFDLHlDQUFPLE9BQVIsTUFBYyxPQUFkLEFBQW9CLE9BQU0sU0FBUyxLQUFBLEFBQUssTUFBeEMsQUFBOEMsZ0JBQWdCLFNBQVMsS0FBdkUsQUFBNEU7b0JBQTVFO3NCQUFBO0FBQUE7T0FBQSxFQVJKLEFBTUUsQUFFRSxBQUtGLDZCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixPQUFuQixBQUEwQix3QkFDM0IsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTFDLEFBQWdELFlBQVksU0FBUyxLQUFyRSxBQUEwRTtvQkFBMUU7c0JBQUE7QUFBQTtPQUFBLEVBaEJOLEFBQ0UsQUFhRSxBQUVFLEFBS1A7Ozs7O0EsQUFoRnNCLEFBbUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJyb3dfcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==