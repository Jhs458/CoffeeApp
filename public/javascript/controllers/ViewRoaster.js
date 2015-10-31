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

		vm.goToRoaster = function(rid){
			// rid.name = rid.name.split(" ").join("");
			console.log(rid);
			RoasterFactory.goToRoaster(rid).then(function(res){
			$state.go("ViewRoasterCoffees", {id:rid});
		});
		};



	}
})();
