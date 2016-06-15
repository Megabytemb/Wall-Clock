'use strict';

describe('Unit: AppCtrl', function() {

  let ctrl;

  beforeEach(function() {
    // instantiate the app module
    angular.mock.module('app');

    angular.mock.inject(($controller) => {
      ctrl = $controller('AppCtrl');
    });
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a function to toggle the Menu', function() {
    expect(ctrl.toggleMenu).toBeDefined();
  });

  it('should have a function to close the Menu', function() {
    expect(ctrl.closeMenu).toBeDefined();
  });

});