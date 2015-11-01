(function() {
	'use strict';
	angular.module('app')
	.controller('ViewRoasterCoffees', ViewRoasterCoffees);

	function ViewRoasterCoffees(CoffeeFactory, UserFactory, RoasterFactory, $stateParams, $state) {
		var vm = this;
		vm.status = UserFactory.status;

		if($stateParams.id){
			CoffeeFactory.getAllCoffees($stateParams.id).then(function(res) {
			vm.coffees = res;
		});
		}

		if($stateParams.id){
			RoasterFactory.getSingleRoaster($stateParams.id).then(function(res) {
					vm.roaster = res;
				});
			}

			vm.editCoffee = function(c){
				$state.go("EditCoffee", {id:c._id});
			};



	}
})();
