(function() {
	'use strict';
	angular.module('app')
	.factory('RoasterFactory', RoasterFactory);


	function RoasterFactory($http, $q) {
		var o = {};

		o.addRoaster = function(roast) {
      var q = $q.defer();
      $http.post('/api/roaster', roast).then(function(res) {
        q.resolve(res.data);
      });
      return q.promise;
    };

		return o;
	}
})();
