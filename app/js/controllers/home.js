function HomeCtrl(ngHue) {
  'ngInject'
  // ViewModel
  const vm = this;
  vm.temp='Hello World';
  
  ngHue.getGroups().then(function(groups) {
	  console.log(groups);
  })

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
