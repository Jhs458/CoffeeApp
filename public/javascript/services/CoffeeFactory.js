(function() {
	'use strict';
	angular.module('app')
	.factory('CoffeeFactory', CoffeeFactory);

	function CoffeeFactory($http, $q) {
		var o = {};

		o.getAllRoasters = function() {
			var q = $q.defer();
			$http.get('/api/roaster').then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};

		o.addCoffee = function(coffee) {
      var q = $q.defer();
      $http.post('/api/coffee', coffee).then(function(res) {
        q.resolve(res.data);
      });
      return q.promise;
    };

		o.getAllCoffees = function(id) {
      var q = $q.defer();
      $http.get('/api/roaster/' + id).then(function(res) {
        q.resolve(res.data);
      });
      return q.promise;
    };

		o.getSingleCoffee = function(id) {
			var q = $q.defer();
			$http.get('/api/coffee/edit/' + id).then(function(res) {
				q.resolve(res.data);
			});
			return q.promise;
		};



		return o;
	}
})();
