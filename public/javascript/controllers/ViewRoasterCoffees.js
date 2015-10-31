(function() {
	'use strict';
	angular.module('app')
	.controller('ViewRoasterCoffees', ViewRoasterCoffees);

	function ViewRoasterCoffees(CoffeeFactory, UserFactory, RoasterFactory, $stateParams) {
		var vm = this;
		vm.status = UserFactory.status;

		if($stateParams.id){
			CoffeeFactory.getAllCoffees($stateParams.id).then(function(res) {
			vm.coffees = res;
		});
		}



	}
})();
