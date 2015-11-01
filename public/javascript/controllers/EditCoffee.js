(function() {
	'use strict';
	angular.module('app')
	.controller('EditCoffee', EditCoffee);

	function EditCoffee(CoffeeFactory, $stateParams) {
		var vm = this;
		vm.editCoffee = {};

		if($stateParams.id){
			CoffeeFactory.getSingleCoffee($stateParams.id).then(function(res) {
			vm.coffee = res;
		});
		}

		vm.editCoffee = function(){

		};


	}
})();
