/*global browser, by */

'use strict';

describe('E2E: Example', function() {
	
	var hasClass = function (element, cls) {
	    return element.getAttribute('class').then(function (classes) {
	        return classes.split(' ').indexOf(cls) !== -1;
	    });
	};

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should toggle the menu when the Menu button is clicked', function() {
    var menuButton = browser.findElement(by.css('body > md-toolbar > div > button')); 
	var menuElement = browser.findElement(by.css('.md-sidenav-left'));
	
	expect(hasClass(menuElement, '_md-closed')).toBe(true);
	
	menuButton.click();
	browser.waitForAngular();
	
	expect(hasClass(menuElement, '_md-closed')).toBe(false);
	
	var backgroupElement = browser.findElement(by.tagName('md-backdrop'));
	backgroupElement.click();
	browser.waitForAngular();
	
	expect(hasClass(menuElement, '_md-closed')).toBe(true);

  });

});