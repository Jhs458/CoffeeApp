(function() {
	'use strict';
	angular.module('app')
	.controller('EditRoaster', EditRoaster);

	function EditRoaster(RoasterFactory, $stateParams, $state) {
		var vm = this;
		vm.editRoaster = {};

		if($stateParams.id){
			RoasterFactory.getSingleRoaster($stateParams.id).then(function(res) {
			vm.roaster = res;
			// console.log(vm.roaster);
		});
		}

		vm.updateRoaster = function(n){
			RoasterFactory.updateRoaster(n, {id:$stateParams.id}).then(function(res) {
				$state.go('ViewRoaster');
			});
		};


	}
})();
