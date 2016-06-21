/* global module */

'use strict';

describe('Unit: mainClock', function() {

  let element;
  let scope;
  let $filter;
  let vm;

  beforeEach(function() {
    angular.mock.module('app');

    angular.mock.inject(($compile, $rootScope, _$filter_) => {
	  $filter = _$filter_;
      scope = $rootScope.$new();

      element = angular.element(
        '<main-Clock></main-Clock>'
      );
	  
	  $compile(element)(scope);
      scope.$digest();
	  
	  vm = element.scope().vm;
   
    });
  });


  it('should load a template that has the time', function() {
	  expect(element[0].querySelector('.md-display-4')).not.toBeNull();
  });

  it('should load a template that has the date', function() {
	  expect(element[0].querySelector('.md-display-2')).not.toBeNull();
  });
  
  it('should initiall display Loading Clock...', function() {
	  expect(element[0].querySelector('.md-display-2').textContent).toEqual('loading clock...');
	  expect(element[0].querySelector('.md-display-4').textContent).toEqual('loading clock...');
  });
  
  it('should show the correct time after a tick', function() {
	  vm.tick();
	  scope.$digest();
	  var shortTime = $filter('date')(new Date(), 'shortTime');
	  expect(element[0].querySelector('.md-display-4').textContent).toEqual(shortTime);
  });
  
  it('should show the correct date after a tick', function() {
	  vm.tick();
	  scope.$digest();
	  var shortDate = $filter('date')(new Date(), 'd/M/yy');
	  expect(element[0].querySelector('.md-display-2').textContent).toEqual(shortDate);
  });

});
