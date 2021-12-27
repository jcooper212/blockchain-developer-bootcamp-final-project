'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _daotoken = require('../../eth/daotoken');

var _daotoken2 = _interopRequireDefault(_daotoken);

var _workstream = require('../../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _row_request = require('./row_request');

var _row_request2 = _interopRequireDefault(_row_request);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/requests.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderRow',
    value: function renderRow() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_row_request2.default, {
          key: index,
          request: request,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Payment Requests'), _react2.default.createElement(_routes.Link, { route: '/workstreams/' + this.props.address + '/new_request', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, 'New Payment'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Approved by Lead'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, 'Approve'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Pay'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, this.renderRow())), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, ' Found ', this.props.requestCount, '  requests. The DAO Balance is: ', this.props.daoBal, '  '));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, workstream, requestCount, daoBal, wkOwner, daoOwner, tokenAddr, daotoken, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                workstream = (0, _workstream2.default)(address);
                _context.next = 4;
                return workstream.methods.getRequestLength().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return workstream.methods.balance().call();

              case 7:
                daoBal = _context.sent;
                _context.next = 10;
                return workstream.methods.getWorkstreamOwner().call();

              case 10:
                wkOwner = _context.sent;
                _context.next = 13;
                return workstream.methods.getDaoOwner().call();

              case 13:
                daoOwner = _context.sent;
                _context.next = 16;
                return _factory2.default.methods.getDaoToken().call();

              case 16:
                tokenAddr = _context.sent;
                daotoken = (0, _daotoken2.default)(tokenAddr);

                console.log("wk dao ", wkOwner, daoOwner, tokenAddr, daoBal);

                _context.next = 21;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                  return workstream.methods.requests(index).call();
                }));

              case 21:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, daoBal: daoBal });

              case 23:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL3JlcXVlc3RzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiZmFjdG9yeSIsIkRhb3Rva2VuIiwiV29ya3N0cmVhbSIsIndlYjMiLCJSZXF1ZXN0Um93IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIlRhYmxlIiwiTGluayIsIlJvdXRlciIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3ciLCJyZXF1ZXN0Q291bnQiLCJkYW9CYWwiLCJxdWVyeSIsIndvcmtzdHJlYW0iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdExlbmd0aCIsImNhbGwiLCJiYWxhbmNlIiwiZ2V0V29ya3N0cmVhbU93bmVyIiwid2tPd25lciIsImdldERhb093bmVyIiwiZGFvT3duZXIiLCJnZXREYW9Ub2tlbiIsInRva2VuQWRkciIsImRhb3Rva2VuIiwiY29uc29sZSIsImxvZyIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBRXZCLEFBQVMsQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDdkMsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUd2Qjs7Ozs7Ozs7Ozs7Z0NBd0JPO21CQUNUOztrQkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2pEOytCQUNFLEFBQUM7ZUFBRCxBQUNTLEFBQ0w7bUJBRkosQUFFYSxBQUNUO21CQUFTLE9BQUEsQUFBSyxNQUhsQixBQUd3Qjs7c0JBSHhCO3dCQURGLEFBQ0UsQUFNSDtBQU5HO0FBQ0ksU0FESjtBQUZKLEFBQU8sQUFTUixPQVRROzs7OzZCQVVEO1VBQUEsQUFDQyxTQURELEFBQ2tDLHVCQURsQyxBQUNDO1VBREQsQUFDUyxNQURULEFBQ2tDLHVCQURsQyxBQUNTO1VBRFQsQUFDYyxhQURkLEFBQ2tDLHVCQURsQyxBQUNjO1VBRGQsQUFDMEIsT0FEMUIsQUFDa0MsdUJBRGxDLEFBQzBCLEFBQ2hDOzs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURBLEFBQ0EsQUFDRSxxQ0FBQSxBQUFDLDhCQUFLLHlCQUF1QixLQUFBLEFBQUssTUFBNUIsQUFBa0MsVUFBeEM7b0JBQUE7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFoQixBQUF3QixTQUFRLE9BQU8sRUFBQyxjQUF4QyxBQUF1QyxBQUFjO29CQUFyRDtzQkFBQTtBQUFBO1NBSkosQUFFRSxBQUNBLEFBQ0UsQUFHRixrQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLGdDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUhGLEFBR0UsQUFDQSwyQkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKRixBQUlFLEFBQ0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLHFDQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQU5GLEFBTUUsQUFDQSw0QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FUTixBQUNFLEFBQ0UsQUFPRSxBQUdKLDBCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBbkJKLEFBT0UsQUFZRSxBQUNHLEFBQUssQUFHViwrQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYSxnQkFBQSxBQUFLLE1BQWxCLEFBQXdCLGNBQThDLHlDQUFBLEFBQUssTUFBM0UsQUFBaUYsUUF4QnJGLEFBQ0UsQUF1QkUsQUFHTDs7Ozs7MkcsQUEvRDRCOzs7OzttQkFDbkI7QSwwQkFBWSxNLEFBQU0sTSxBQUFsQixBQUNGO0EsNkJBQWEsMEIsQUFBQSxBQUFXOzt1QkFDSCxXQUFBLEFBQVcsUUFBWCxBQUFtQixtQixBQUFuQixBQUFzQzs7bUJBQTNEO0E7O3VCQUNnQixXQUFBLEFBQVcsUUFBWCxBQUFtQixVLEFBQW5CLEFBQTZCOzttQkFBN0M7QTs7dUJBQ2dCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLHFCLEFBQW5CLEFBQXdDOzttQkFBeEQ7QTs7dUJBQ2lCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGMsQUFBbkIsQUFBaUM7O21CQUFsRDtBOzt1QkFDa0Isa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGMsQUFBaEIsQUFBOEI7O21CQUFoRDtBLHFDQUNBO0EsMkJBQVcsd0JBQ2pCLEEsQUFEaUIsQUFBUzs7d0JBQzFCLEFBQVEsSUFBUixBQUFZLFdBQVosQUFBdUIsU0FBdkIsQUFBZ0MsVUFBaEMsQUFBMEMsV0FBMUMsQUFBcUQ7Ozt5Q0FHOUIsQUFBUSxVQUN2QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0MsT0FERCxBQUVDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZCO3lCQUFPLFdBQUEsQUFBVyxRQUFYLEFBQW1CLFNBQW5CLEFBQTRCLE9BQW5DLEFBQU8sQUFBbUMsQUFDM0M7QSxBQUxvQixBQUNyQixpQkFBQSxDQURxQjs7bUJBQWpCO0E7aURBUUMsRUFBQyxTQUFELFNBQVUsVUFBVixVQUFvQixjQUFwQixjQUFrQyxRLEFBQWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFyQmdCLEFBbUUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZXF1ZXN0cy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==