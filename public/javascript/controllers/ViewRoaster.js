(function() {
	'use strict';
	angular.module('app')
	.controller('ViewRoaster', ViewRoaster);

	function ViewRoaster(RoasterFactory, CoffeeFactory, $state) {
		var vm = this;

		CoffeeFactory.getAllRoasters().then(function(res) {
					vm.roasters = res;
				});

		vm.goToRoaster = function(rid){
			// rid.name = rid.name.split(" ").join("");
			// RoasterFactory.goToRoaster(rid).then(function(res){
			$state.go("ViewRoasterCoffees", {id:rid._id});
			// });
			};

		vm.deleteRoaster = function(y){
					var response = confirm("Are You Sure You'd Like To Delete?");
					if(response){
						RoasterFactory.deleteRoaster(y._id).then(function() {
								vm.roasters.splice(vm.roasters.indexOf(y), 1);
							});
						}
				else{
					$state.go('ViewRoaster');
						}
					};

		vm.editRoaster = function(er){
				$state.go("EditRoaster", {id:er._id});
			};

			// console.log()

	}
})();
