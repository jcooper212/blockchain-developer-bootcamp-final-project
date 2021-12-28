'use strict';

var routes = require('next-routes')();

routes.add('/workstreams/new', '/workstreams/new');
routes.add('/workstreams/:address', '/workstreams/show');
routes.add('/workstreams/:address/requests', '/workstreams/requests');
routes.add('/workstreams/:address/new_request', '/workstreams/new_request');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUFPLEFBQVAsSUFBVyxBQUFYLG9CQUErQixBQUEvQjtBQUNBLE9BQU8sQUFBUCxJQUFXLEFBQVgseUJBQW9DLEFBQXBDO0FBQ0EsT0FBTyxBQUFQLElBQVcsQUFBWCxrQ0FBNkMsQUFBN0M7QUFDQSxPQUFPLEFBQVAsSUFBVyxBQUFYLHFDQUFnRCxBQUFoRDs7QUFHQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qY29vcGVyL3B5L2NyeXB0by9jb25zZW5zeXMvYmxvY2tjaGFpbi1kZXZlbG9wZXItYm9vdGNhbXAtZmluYWwtcHJvamVjdCJ9