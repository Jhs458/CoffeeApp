(function() {
	'use strict';
	angular.module('app')
	.controller('GlobalController', GlobalController);

	function GlobalController(UserFactory, $mdSidenav, $state) {
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

				vm.isOpenBottom = false;
				//vm.availableModes = ['md-fling', 'md-scale'];
				vm.selectedMode = 'md-fling';
				//vm.availableDirections = ['up', 'down', 'left', 'right'];
				vm.selectedDirection = 'down';

				vm.isOpenBottom = false;
				vm.selectedDirectionBottom = 'right';
				vm.selectedModeBottom = 'md-fling';


				vm.logout = function() {
      UserFactory.logout();
        $state.go('Home');
  };

    vm.register = function() {
      UserFactory.register(vm.user).then(function() {
        $state.go('Home');
      });
    };

    vm.login = function() {
      UserFactory.login(vm.user).then(function() {
        vm.close();
      });
    };

		vm.goToProfile = function(){
			$state.go("Profile");
		};

		vm.goToAddCoffee = function(){
			$state.go("AddCoffee");
		}

		vm.goToAddRoaster = function(){
			$state.go("AddRoaster");
		}

		vm.viewRoaster = function(){
			$state.go("ViewRoaster");
		}

		vm.viewSplash = function(){
			$state.go("Home");
		}



	}
})();
