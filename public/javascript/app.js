(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);

	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider
		.state('ViewRoaster',{
			url: '/viewroaster',
			templateUrl: 'views/ViewRoaster.html'
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
		})
		.state('Home',{
			url: '/',
			templateUrl: 'views/Splash.html'
		});
		$urlRouterProvider.otherwise('/');
		$httpProvider.interceptors.push('AuthInterceptor');
	}
})();
