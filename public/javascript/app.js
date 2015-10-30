(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('Roaster',{
			url: '/',
			templateUrl: 'views/Roaster.html'
		})
		.state('AddRoaster',{
			url: '/addroaster',
			templateUrl: 'views/AddRoaster.html'
		})
		.state('EditRoaster',{
			url: '/editroaster',
			templateUrl: 'views/EditRoaster.html'
		})
		.state('ViewRoasterCoffees',{
			url: '/viewroastercoffees',
			templateUrl: 'views/ViewRoasterCoffees.html'
		})
		.state('ViewCoffee',{
			url: '/viewcoffee',
			templateUrl: 'views/ViewCoffee.html'
		})
		.state('AddCoffee',{
			url: '/addcoffee',
			templateUrl: 'views/AddCoffee.html'
		})
		.state('EditCoffee',{
			url: '/editcoffee',
			templateUrl: 'views/EditCoffee.html'
		})
		.state('Profile',{
			url: '/profile',
			templateUrl: 'views/Profile.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
