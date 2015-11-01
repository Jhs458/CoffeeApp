(function() {
	'use strict';
	angular.module('app')
	.controller('EditCoffee', EditCoffee);

	function EditCoffee(CoffeeFactory, $stateParams, $state) {
		var vm = this;
		vm.editCoffee = {};

		if($stateParams.id){
			CoffeeFactory.getSingleCoffee($stateParams.id).then(function(res) {
			vm.coffee = res;
			// console.log(vm.coffee);
		});
		}

		if($stateParams.id){
			CoffeeFactory.getAllRoasters($stateParams.id).then(function(res) {
			vm.roasters = res;
		});
		}

		vm.updateCoffee = function(z) {
			// console.log(z);
			CoffeeFactory.updateCoffee(z, {id:$stateParams.id}).then(function(res) {
				$state.go('ViewRoasterCoffees', {id: z.roaster}, {location: true});
			});
		};


		vm.deleteCoffee = function(){
				var response = confirm("Are You Sure You'd Like To Delete?");
				if(response){
					CoffeeFactory.deleteCoffee({id:$stateParams.id}).then(function() {
						// vm.communities.splice(vm.communities.indexOf(id), 1);
							$state.go('ViewRoaster');
						});
					}
			else{
				// console.log('ViewCommunity', {id:$stateParams.id})
				$state.go('ViewRoaster');
					}
				};


	}
})();
