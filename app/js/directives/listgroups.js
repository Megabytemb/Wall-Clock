function listGroupsController($scope, $element, $interval, ngHue) {
  'ngInject';
	const vm = this;
  
  vm.groups = [];

	
	var tickInterval = 500 //ms
  
  vm.toggleGroup = function(group) {
    var futureState = {};
    futureState.on = !group.state.any_on
    ngHue.setGroupState(group.id, futureState);
  }
  
  vm.refreshGroups = function()
  {
    ngHue.getGroups().then(function(groups) {
      for (var index in groups) {    // don't actually do this
        groups[index].id = index;
      }
      vm.groups = groups;
    })
  }
	
	vm.tick = function() {
		vm.clock = Date.now() // get the current time
    }
    vm.refreshGroups();
	
	var ClockInterval = $interval(vm.refreshGroups, tickInterval);
	
	$element.on('$destroy', function() {
          $interval.cancel(ClockInterval);
        });
}

function listGroups() {

	return {
    	restrict: 'E',
    	templateUrl: 'directives/listGroups.html',
	  	controller: listGroupsController,
		controllerAs:'vm',
    scope: true,
		bindToController: true 
	};
}

export default {
  name: 'listGroups',
  fn: listGroups
};
