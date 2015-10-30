(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController(UserFactory, $mdSidenav) {
		var vm = this;
		vm.isLogin = true;
    vm.user = {};
    vm.status = UserFactory.status;

		vm.close = function () {
		      $mdSidenav('right').toggle();
		    };
		    vm.toggleRight = function () {
		      $mdSidenav('right').toggle();
		    };

				vm.isOpen = false;
				//vm.availableModes = ['md-fling', 'md-scale'];
				vm.selectedMode = 'md-fling';
				//vm.availableDirections = ['up', 'down', 'left', 'right'];
				vm.selectedDirection = 'down';

				vm.logout = function() {
      // UserFactory.logout();
      //   $state.go('Home');
  };

    vm.register = function() {
      // UserFactory.register(vm.user).then(function() {
      //   $state.go('Home');
      // });
    };

    vm.login = function() {
      // UserFactory.login(vm.user).then(function() {
      //   $state.go('Home');
      // });
    };



	}
})();
