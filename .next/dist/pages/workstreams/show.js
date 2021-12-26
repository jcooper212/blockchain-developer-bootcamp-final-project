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

var _workstream = require('../../eth/workstream');

var _workstream2 = _interopRequireDefault(_workstream);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jcooper/py/crypto/consensys/blockchain-developer-bootcamp-final-project/pages/workstreams/show.js?entry';


var WorkstreamShow = function (_Component) {
  (0, _inherits3.default)(WorkstreamShow, _Component);

  function WorkstreamShow() {
    (0, _classCallCheck3.default)(this, WorkstreamShow);

    return (0, _possibleConstructorReturn3.default)(this, (WorkstreamShow.__proto__ || (0, _getPrototypeOf2.default)(WorkstreamShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(WorkstreamShow, [{
    key: 'renderCards',
    value: function renderCards() {
      console.log(workstreamName);
      var _props = this.props,
          workstreamName = _props.workstreamName,
          workstreamOwner = _props.workstreamOwner,
          pendingRequestCount = _props.pendingRequestCount,
          totalRequests = _props.totalRequests,
          pendingBalance = _props.pendingBalance,
          totalBalance = _props.totalBalance,
          workstreamAddress = _props.workstreamAddress;

      var items_name = [{
        header: workstreamName,
        meta: 'Name',
        //        description: 'Name of the worksteam',
        style: { overflowWrap: 'break-word' }
      }, {
        meta: 'Owner',
        header: workstreamOwner,
        //        description: 'Owner of the worksteam',
        style: { overflowWrap: 'break-word' }
      }];
      var items_balances = [{
        meta: 'Total Balance',
        header: totalBalance,
        description: 'Total Balance of payment requests',
        style: { overflowWrap: 'break-word' }
      }, {
        meta: 'Outstanding Balance',
        header: pendingBalance,
        description: 'Outstanding Balance of payment requests',
        style: { overflowWrap: 'break-word' }
      }];
      var items_requests = [{
        meta: 'Total Request',
        header: totalRequests,
        description: 'Total number of payment requests',
        //description: totalBalance,
        style: { overflowWrap: 'break-word' }
      }, {
        meta: 'Outstanding Request',
        header: pendingRequestCount,
        description: 'Outstanding number of approvals',
        style: { overflowWrap: 'break-word' }
      }];
      return _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { items: items_name, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { items: items_balances, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement(_semanticUiReact.Card.Group, { items: items_requests, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_routes.Link, { route: '/workstreams/' + workstreamAddress + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Payment Requests'))))));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          workstreamName = _props2.workstreamName,
          workstreamOwner = _props2.workstreamOwner,
          pendingRequestCount = _props2.pendingRequestCount,
          totalRequests = _props2.totalRequests,
          pendingBalance = _props2.pendingBalance,
          totalBalance = _props2.totalBalance;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), this.renderCards());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var workstream, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //console.log(props.query.address);
                workstream = (0, _workstream2.default)(props.query.address);
                _context.next = 3;
                return workstream.methods.getSummary().call();

              case 3:
                summary = _context.sent;

                console.log(summary);
                //    workstreamName, workstreamOwner, pendingRequestCount, requests.length, pendingBalance, totalBalance
                return _context.abrupt('return', { workstreamName: summary[0],
                  workstreamOwner: summary[1],
                  pendingRequestCount: summary[2],
                  totalRequests: summary[3],
                  pendingBalance: summary[4],
                  totalBalance: summary[5],
                  workstreamAddress: props.query.address
                });

              case 6:
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

  return WorkstreamShow;
}(_react.Component);

exports.default = WorkstreamShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3dvcmtzdHJlYW1zL3Nob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJXb3Jrc3RyZWFtIiwid2ViMyIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiTGluayIsIldvcmtzdHJlYW1TaG93IiwiY29uc29sZSIsImxvZyIsIndvcmtzdHJlYW1OYW1lIiwicHJvcHMiLCJ3b3Jrc3RyZWFtT3duZXIiLCJwZW5kaW5nUmVxdWVzdENvdW50IiwidG90YWxSZXF1ZXN0cyIsInBlbmRpbmdCYWxhbmNlIiwidG90YWxCYWxhbmNlIiwid29ya3N0cmVhbUFkZHJlc3MiLCJpdGVtc19uYW1lIiwiaGVhZGVyIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiaXRlbXNfYmFsYW5jZXMiLCJkZXNjcmlwdGlvbiIsIml0ZW1zX3JlcXVlc3RzIiwicmVuZGVyQ2FyZHMiLCJ3b3Jrc3RyZWFtIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O2tDQWdCVSxBQUNaO2NBQUEsQUFBUSxJQURJLEFBQ1osQUFBWTttQkFTUixLQVZRLEFBVUg7VUFWRyxBQUdWLHdCQUhVLEFBR1Y7VUFIVSxBQUlWLHlCQUpVLEFBSVY7VUFKVSxBQUtWLDZCQUxVLEFBS1Y7VUFMVSxBQU1WLHVCQU5VLEFBTVY7VUFOVSxBQU9WLHdCQVBVLEFBT1Y7VUFQVSxBQVFWLHNCQVJVLEFBUVY7VUFSVSxBQVNWLDJCQVRVLEFBU1YsQUFFRjs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FGRixBQUVPLEFBQ2I7QUFDUTtlQUFPLEVBQUMsY0FMTyxBQUNqQixBQUlTLEFBQWU7QUFKeEIsQUFDRSxPQUZlO2NBT2pCLEFBQ1EsQUFDTjtnQkFGRixBQUVVLEFBQ2hCO0FBQ1E7ZUFBTyxFQUFDLGNBWFosQUFBbUIsQUFPakIsQUFJUyxBQUFlLEFBRTFCO0FBTkUsQUFDRTtVQUtFO2NBQ0osQUFDUSxBQUNOO2dCQUZGLEFBRVUsQUFDUjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFDLGNBTFcsQUFDckIsQUFJUyxBQUFlO0FBSnhCLEFBQ0UsT0FGbUI7Y0FPckIsQUFDUSxBQUNOO2dCQUZGLEFBRVUsQUFDUjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFDLGNBWFosQUFBdUIsQUFPckIsQUFJUyxBQUFlLEFBRTFCO0FBTkUsQUFDRTtVQUtFO2NBQ0osQUFDUSxBQUNOO2dCQUZGLEFBRVUsQUFDUjtxQkFIRixBQUdlLEFBQ2I7QUFDQTtlQUFPLEVBQUMsY0FOVyxBQUNyQixBQUtTLEFBQWU7QUFMeEIsQUFDRSxPQUZtQjtjQVFyQixBQUNRLEFBQ047Z0JBRkYsQUFFVSxBQUNSO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUMsY0FaWixBQUF1QixBQVFyQixBQUlTLEFBQWUsQUFHMUI7QUFQRSxBQUNFOzZCQU9GLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNBO0FBREE7QUFBQSx5QkFDQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBSEosQUFDRSxBQUNBLEFBQ0UsQUFHRjtBQUhFOzRCQUdELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDQTtBQURBO0FBQUEseUJBQ0MsY0FBRCxzQkFBQSxBQUFNLFVBQVEsT0FBZCxBQUFxQjtvQkFBckI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQURGLEFBQ0UsQUFDQTtBQURBO3dDQUNBLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQVRKLEFBTUUsQUFDQSxBQUVFLEFBR0Y7QUFIRTs0QkFHRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLHlCQUNDLGNBQUQsc0JBQUEsQUFBTSxVQUFRLE9BQWQsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLDhCQUFLLHlCQUFBLEFBQXVCLG9CQUE3QjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FqQlIsQUFDRSxBQVlFLEFBQ0EsQUFDQSxBQUNFLEFBQ0UsQUFRVDs7Ozs2QkFDUTtvQkFRSCxLQVJHLEFBUUU7VUFSRixBQUVMLHlCQUZLLEFBRUw7VUFGSyxBQUdMLDBCQUhLLEFBR0w7VUFISyxBQUlMLDhCQUpLLEFBSUw7VUFKSyxBQUtMLHdCQUxLLEFBS0w7VUFMSyxBQU1MLHlCQU5LLEFBTUw7VUFOSyxBQU9MLHVCQVBLLEFBT0wsQUFFRjs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQTs7b0JBQ0U7c0JBREYsQUFDRSxBQUNDO0FBREQ7QUFBQSxlQUZKLEFBQ0UsQUFFRyxBQUFLLEFBR1g7Ozs7OzJHLEFBNUc0Qjs7Ozs7bUJBQzNCO0FBQ007QSw2QkFBYSwwQkFBVyxNQUFBLEFBQU0sTSxBQUFqQixBQUF1Qjs7dUJBQ3BCLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGEsQUFBbkIsQUFBZ0M7O21CQUFoRDtBLG1DQUNOOzt3QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNoQjs7bURBQ1csZ0JBQWdCLFFBQWpCLEFBQWlCLEFBQVEsQUFDdkI7bUNBQWlCLFFBRG5CLEFBQ21CLEFBQVEsQUFDekI7dUNBQXFCLFFBRnZCLEFBRXVCLEFBQVEsQUFDN0I7aUNBQWUsUUFIakIsQUFHaUIsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFKbEIsQUFJa0IsQUFBUSxBQUN4QjtnQ0FBYyxRQUxoQixBQUtnQixBQUFRLEFBQ3RCO3FDQUFtQixNQUFBLEFBQU0sTSxBQU4zQixBQU1pQztBQU5qQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBUG1CLEFBK0c3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qY29vcGVyL3B5L2NyeXB0by9jb25zZW5zeXMvYmxvY2tjaGFpbi1kZXZlbG9wZXItYm9vdGNhbXAtZmluYWwtcHJvamVjdCJ9