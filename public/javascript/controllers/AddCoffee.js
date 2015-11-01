(function() {
	'use strict';
	angular.module('app')
	.controller('AddCoffee', AddCoffee);

	function AddCoffee(CoffeeFactory, $state) {
		var vm = this;
		vm.coffee = {};

		vm.addCoffee = function(){
			// console.log(vm.coffee)
					CoffeeFactory.addCoffee(vm.coffee).then(function(res) {
								$state.go('Home');
								});
							};

		CoffeeFactory.getAllRoasters().then(function(res) {
					vm.roasters = res;
				});


	}
})();
