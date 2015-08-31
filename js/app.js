var app = angular.module('WallClockApp', ['ngMaterial', 'ngRoute']);

app.config(function ($routeProvider, $mdThemingProvider) {
	$mdThemingProvider.theme('default')
	    .dark();
	
	$routeProvider
	  
      .when('/clock', {
        templateUrl: 'html/clock.html',
        controller: 'ClockController'
      })
	  
      .when('/lights', {
        templateUrl: 'html/lights.html',
        controller: 'LightsController'
      })
	  
      .otherwise({
        redirectTo: '/clock'
      });
	  
  });