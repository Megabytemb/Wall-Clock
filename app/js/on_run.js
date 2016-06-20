function OnRun($rootScope, AppSettings, $mdDialog, $mdToast, ngHue, $localStorage) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
  
    function showHueSetup() {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('We found a Hue Bridge on your Network!')
          .textContent('To enable Phillips Hue integration, please tap the button on your Bridge, then tap Done')
          .ariaLabel('Enable Hue Integration')
          .ok('Done')
          .cancel('cancel');
	    $mdDialog.show(confirm).then(function() {
			_createHueUser();
	    }, function() {
			return;
	    });
  	};

    if ($localStorage.HueUsername===undefined){
  	  _createHueUser();
    }
	else {
		connectToHue($localStorage.HueUsername);
	}

	function _createHueUser()
	{
	  	ngHue.createUser(AppSettings.HueAppName).then(function successCallback(response) {
			$localStorage.HueUsername = response[0].success.username;
			connectToHue($localStorage.HueUsername);
	  	}, function errorCallback(response) {
			if (response[0].error.type === 101) {
				showHueSetup();
			};
	  	});
	}

	function connectToHue(username){
		ngHue.setup({
			username: username
		})
		$mdToast.show(
		      $mdToast.simple()
		        .textContent('connected to Hue Bridge')
		        .hideDelay(3000)
		    );
	}

}

export default OnRun;
