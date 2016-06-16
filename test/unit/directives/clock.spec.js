/* global module */

'use strict';

describe('Unit: mainClock', function() {

  let element;
  let scope;
  let $filter;
  let $interval;
  let template;
  let controller;

  beforeEach(function() {
    angular.mock.module('app');

    angular.mock.inject(($compile, $rootScope, _$filter_, _$interval_) => {
	  $filter = _$filter_;
	  $interval = _$interval_;
      scope = $rootScope.$new();

      element = angular.element(
        '<main-Clock></main-Clock>'
      );
	  
	  template = $compile(element)(scope);
      scope.$digest();
	  
	  controller = scope.vm;
	 
    });
  });


  it('should load a template that has the time', function() {
	  expect(element[0].querySelector('.md-display-4')).not.toBeNull();
  });

  it('should load a template that has the date', function() {
	  expect(element[0].querySelector('.md-display-2')).not.toBeNull();
  });
  
  it('should initiall display Loading Clock...', function() {
	  expect(element[0].querySelector('.md-display-2').textContent).toEqual("loading clock...");
	  expect(element[0].querySelector('.md-display-4').textContent).toEqual("loading clock...");
  });
  
  it('should show the correct time after a tick', function() {
	  controller.tick();
	  scope.$digest();
	  var shortTime = $filter('date')(new Date(), 'shortTime');
	  expect(element[0].querySelector('.md-display-4').textContent).toEqual(shortTime);
  });
  
  it('should show the correct date after a tick', function() {
	  controller.tick();
	  scope.$digest();
	  var shortDate = $filter('date')(new Date(), 'shortDate');
	  expect(element[0].querySelector('.md-display-2').textContent).toEqual(shortDate);
  });

});
