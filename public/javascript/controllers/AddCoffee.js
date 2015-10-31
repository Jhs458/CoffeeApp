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
						console.log(res);
								$state.go('Home');
										// vm.coffee = {};
								});
							};

		CoffeeFactory.getAllRoasters().then(function(res) {
					vm.roasters = res;
					console.log(vm.roasters);
				});


	}
})();
