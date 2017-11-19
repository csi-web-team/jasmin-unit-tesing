/* Author: Ranjith R
   Date: 19-11-2017 
   titleCase directive functionality Test spec
   Unit Test case followed by Jasmine and Karma test code runner by Javascript 
*/
(function(){
    'use strict';
    
	describe("titleCase Initialization", function(){
		var $filter, filter;
		beforeEach(function(){
			module('pie');
			inject(function($injector) {
		        $filter = $injector.get('$filter');
				filter = $filter('titleCase');
		    });
		});
	    it('should return undefined when undefined is passed in', function() {
		    expect(filter(undefined)).toBeUndefined();
		});
		it('should return null when null is passed in', function() {
		    expect(filter(null)).toBeNull();
		});
		it('should return blank string when a blank string is passed in', function() {
		    expect(filter("")).toEqual("");
		});
		it('should change casing to lower cased word', function() {
		    expect(filter("ranjith rajendran")).toEqual("Ranjith Rajendran");
		});
		it('should change casing to upper cased word', function() {
		    expect(filter("RANJITH RAJENDRAN")).toEqual("Ranjith Rajendran");
		});

		it('should change casing to random', function() {
			expect(filter("rajEn rAnJith")).toEqual("Rajen Ranjith");
		});
	});
}());