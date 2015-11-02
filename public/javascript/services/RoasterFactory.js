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

		// o.goToRoaster = function(rid){
		// 	// rid.name = rid.name.split(" ").join("");
		// 	var q = $q.defer();
		// 	$http.get('/api/roaster/' + rid._id).then(function(res) {
		// 		q.resolve(res.data);
		// 	});
		// 	return q.promise;
		// };

		o.getSingleRoaster = function(id){
			var q = $q.defer();
			$http.get('/api/roaster/name/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.deleteRoaster = function(id){
			// console.log(id);
			var q = $q.defer();
			$http.delete('/api/roaster/' + id).then(function(res) {
				q.resolve();
			});
			return q.promise;
		};

		o.updateRoaster = function(n, id) {
					var q = $q.defer();
					$http.put('/api/roaster/' + id.id, n).then(function (res) {
						q.resolve(res.data);
					});
					return q.promise;
				};

		return o;
	}
})();
