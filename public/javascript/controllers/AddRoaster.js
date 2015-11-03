(function() {
	'use strict';
	angular.module('app')
	.controller('AddRoaster', AddRoaster);

	function AddRoaster(RoasterFactory, $state) {
		var vm = this;
		vm.roaster = {};

		vm.addRoaster = function(){
				// console.log("controller")
		      RoasterFactory.addRoaster(vm.roaster).then(function(res) {
						// console.log(res);
		                $state.go('Home');
		            });
		          };

		// vm.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

	}
})();
