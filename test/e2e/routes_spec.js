/*global browser */

'use strict';

describe('E2E: Routes', function() {
	console.log('Angular Material does not support protractor at this time');
	console.log('https://github.com/angular/material/issues/8324');
	return
	
  it('should have a working home route', function() {
    browser.get('#/');
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

});