(function() {
	'use strict';
	angular.module('app')
	.factory('CoffeeFactory', CoffeeFactory);


	function CoffeeFactory($http, $q) {
		var o = {};

		return o;
	}
})();
