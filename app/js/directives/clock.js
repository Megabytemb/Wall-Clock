function mainClock() {

	return {
    	restrict: 'E',
    	templateUrl: 'directives/clock.html',
	  	controller: function($scope, $element, $interval){
			'ngInject';
			const vm = this;
			
			vm.clock = 'loading clock...'; // initialise the time variable
			var tickInterval = 1000 //ms
			
			vm.tick = function() {
				vm.clock = Date.now() // get the current time
		    }
			
			var ClockInterval = $interval(vm.tick, tickInterval);
			
			$element.on('$destroy', function() {
	            $interval.cancel(ClockInterval);
	          });
	    },
		controllerAs:'vm',
      scope: true,
		bindToController: true 
	};
}

export default {
  name: 'mainClock',
  fn: mainClock
};
