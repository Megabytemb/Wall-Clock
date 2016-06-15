/*global browser, by */

'use strict';

describe('E2E: Example', function() {
	console.log('Angular Material does not support protractor at this time');
	console.log('https://github.com/angular/material/issues/8324');
	return

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should show the number defined in the controller', function() {
    var element = browser.findElement(by.css('.number-example'));
    expect(element.getText()).toEqual('1234');
  });

});