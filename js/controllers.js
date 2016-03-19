app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  
  $scope.close = function () {
	  $mdSidenav('left').close();
  };
 
}]);

// create the controller and inject Angular's $scope
app.controller('ClockController', function ($scope, $timeout, hue) {
	$scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms
	
	  $scope.myHue = hue;
	  $scope.myHue.setup({
	    username: "35d320eb3c56054f3fd39df338370ed7", debug: true
	  });
	
	$scope.ToggleLight = function(Light, Current_state) {
		$scope.myHue.setLightState(Light, {"on": !Current_state})
		
		.then(function(response) {
		    $scope.lights[Light].state.on = !Current_state;
		    console.log('API response: ', response);
		  });
	  }
	  
    var tick = function() {
		$scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }
	
	var lightTick = function()
	{
		$scope.myHue.getLights().then(function(lights) {
			for (var key in lights) {
			    // skip loop if the property is from prototype
			    light = lights[key];
				if (light.state.reachable && light.state.on) {
					light.class = "md-accent";
				}
				else if (light.state.reachable)
				{
					light.class = "md-warn";
				}
				else
				{
					light.class = "";
				}
				lights[key] = light;
			
			}
			$scope.lights = lights;
		
			console.log(lights);
	  	});
		$timeout(lightTick, $scope.tickInterval); // reset the timer
	}

    // Start the timer
    $timeout(tick, $scope.tickInterval);
	$timeout(lightTick, $scope.tickInterval);
});

// create the controller and inject Angular's $scope
app.controller('LightsController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});