function AppCtrl($log, $mdSidenav) {
	'ngInject';
	// ViewModel
	const vm = this;


	vm.closeMenu = function() {
		$mdSidenav('menu').close()
			.then(function(){
				$log.debug('open LEFT is done');
			});
	};
	
	vm.toggleMenu = function() {
		$mdSidenav('menu').toggle();
	}
	
}

export default {
	name: 'AppCtrl',
	fn: AppCtrl
};
