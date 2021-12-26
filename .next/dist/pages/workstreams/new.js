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

var _daotoken = require('../../eth/daotoken');

var _daotoken2 = _interopRequireDefault(_daotoken);

var _workstream = require('../../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/new.js?entry';


var WorkstreamNew = function (_Component) {
  (0, _inherits3.default)(WorkstreamNew, _Component);

  function WorkstreamNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WorkstreamNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WorkstreamNew.__proto__ || (0, _getPrototypeOf2.default)(WorkstreamNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      workstreamName: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts, wkAddr;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;

                console.log("here are the accts ", accounts);

                _context.next = 9;
                return _factory2.default.methods.createDaoWorkstream(_this.state.workstreamName, _this.state.workstreamOwner).send({ from: accounts[0] });

              case 9:
                wkAddr = _context.sent;

                _routes.Router.pushRoute('/');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](2);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WorkstreamNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'New Workstream'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Workstream Name'), _react2.default.createElement(_semanticUiReact.Input, {
        label: '   ',
        labelPosition: 'right',
        value: this.state.workstreamName,
        onChange: function onChange(event) {
          return _this3.setState({ workstreamName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'Workstream Owner'), _react2.default.createElement(_semanticUiReact.Input, {
        label: '   ',
        labelPosition: 'right',
        value: this.state.workstreamOwner,
        onChange: function onChange(event) {
          return _this3.setState({ workstreamOwner: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops ', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Create')));
    }
  }]);

  return WorkstreamNew;
}(_react.Component);

exports.default = WorkstreamNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsImZhY3RvcnkiLCJEYW90b2tlbiIsIldvcmtzdHJlYW0iLCJ3ZWIzIiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJSb3V0ZXIiLCJXb3Jrc3RyZWFtTmV3Iiwic3RhdGUiLCJ3b3Jrc3RyZWFtTmFtZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNyZWF0ZURhb1dvcmtzdHJlYW0iLCJ3b3Jrc3RyZWFtT3duZXIiLCJzZW5kIiwiZnJvbSIsIndrQWRkciIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFHdkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0ksQUFHdkI7Ozs7Ozs7Ozs7Ozs7OzswTixBQUNKO3NCQUFRLEFBQ1UsQUFDaEI7b0JBRk0sQUFFUSxBQUNkO2UsQUFITSxBQUdHO0FBSEgsQUFDTixhLEFBSUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDTjtzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUZyQixBQUVULEFBQWMsQUFBNkI7Z0NBRmxDO2dDQUFBO3VCQUlnQixjQUFBLEFBQUssSUFKckIsQUFJZ0IsQUFBUzs7bUJBQTFCO0FBSkMsb0NBS1A7O3dCQUFBLEFBQVEsSUFBUixBQUFZLHVCQUxMLEFBS1AsQUFBb0M7O2dDQUw3Qjt1QkFPYyxrQkFBQSxBQUFRLFFBQVIsQUFDbEIsb0JBQW9CLE1BQUEsQUFBSyxNQURQLEFBQ2EsZ0JBQWdCLE1BQUEsQUFBSyxNQURsQyxBQUN3QyxpQkFEeEMsQUFFbEIsS0FBSyxFQUFDLE1BQU0sU0FUUixBQU9jLEFBRWIsQUFBTyxBQUFTOzttQkFGbEI7QUFQQyxrQ0FVUDs7K0JBQUEsQUFBTyxVQVZBLEFBVVAsQUFBaUI7Z0NBVlY7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBYVA7O3NCQUFBLEFBQUssU0FBUyxFQUFDLGNBQWMsWUFidEIsQUFhUCxBQUFjLEFBQW1COzttQkFFbkM7c0JBQUEsQUFBSyxTQUFTLEVBQUMsU0FmTixBQWVULEFBQWMsQUFBVTs7bUJBZmY7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFrQkY7bUJBQ1A7OzZCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLG1DQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLG9DQUFBLEFBQUM7ZUFBRCxBQUNNLEFBQ047dUJBRkEsQUFFYyxBQUNkO2VBQVMsS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDcEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxnQkFBZ0IsTUFBQSxBQUFNLE9BQTlDLEFBQVMsQUFBYyxBQUE4QjtBQUovRDs7b0JBQUE7c0JBSEYsQUFDRSxBQUVBLEFBT0E7QUFQQTtBQUNBLDJCQU1DLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLHFDQUFBLEFBQUM7ZUFBRCxBQUNNLEFBQ047dUJBRkEsQUFFYyxBQUNkO2VBQVMsS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDcEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxpQkFBaUIsTUFBQSxBQUFNLE9BQS9DLEFBQVMsQUFBYyxBQUErQjtBQUpoRTs7b0JBQUE7c0JBWkYsQUFVRSxBQUVBLEFBUUE7QUFSQTtBQUNBLDJCQU9BLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBcEJGLEFBb0JFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQXhCSixBQUNBLEFBRUUsQUFxQkUsQUFLTDs7Ozs7QUFHSCxBLEFBekQ0Qjs7a0JBeUQ1QixBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamNvb3Blci9weS9jcnlwdG8vY29uc2Vuc3lzL2Jsb2NrY2hhaW4tZGV2ZWxvcGVyLWJvb3RjYW1wLWZpbmFsLXByb2plY3QifQ==