(function() {
	'use strict';
	angular.module('app')
	.controller('ViewRoaster', ViewRoaster);

	function ViewRoaster(RoasterFactory, CoffeeFactory, $state) {
		var vm = this;

		CoffeeFactory.getAllRoasters().then(function(res) {
					vm.roasters = res;
					// console.log(vm.roasters);
				});


	}
})();
