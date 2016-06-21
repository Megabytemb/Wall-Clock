function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $mdThemingProvider, $logProvider, AppSettings) {
    'ngInject';

    $mdThemingProvider.theme('default')
    .accentPalette('blue')
		.dark();

    $locationProvider.html5Mode(false);

    $stateProvider
	    .state('Home', {
	        url: '/',
	        controller: 'HomeCtrl as home',
	        templateUrl: 'home.html',
	        title: 'Home'
	    });

    $urlRouterProvider.otherwise('/');
    
    $logProvider.debugEnabled(AppSettings.debugEnabled)

}

export default OnConfig;