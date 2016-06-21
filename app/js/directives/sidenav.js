function sideNavController()
{
	var vm = this;
	
	vm.temp='Hell World';

}

function sideNav() {

  return {
    restrict: 'E',
    templateUrl: 'directives/sidenav.html',
  	controller: sideNavController,
	controllerAs:'vm',
    scope: true,
	bindToController: true
    
  };
}

export default {
  name: 'sideNav',
  fn: sideNav
};
