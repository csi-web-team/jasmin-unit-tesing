/* Author: Ranjith R
   Date: 19-11-2017 
   TableController controller functionality Tests spec
   Unit Test case followed by Jasmine and Karma test code runner by Javascript 
*/
(function(){
    'use strict';
    
	describe("TableController Initialization", function(){
		var $rootScope,
			$scope,
			controller;

		beforeEach(function(){
			module('csv');
			inject(function($injector) {
		        $rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				controller = $injector.get('$controller')('TableController',{$scope:$scope});
		    });
		});
	    it('should have model defined and TableController.model.name is equal to controllerAs vm test', function() {
		    expect(controller).toBeDefined();
		    expect(controller.model).toBeDefined();
		    expect(controller.model.name).toEqual("CSV To Visualization");
		});

		it('should not have a property called vm', function() {
		    expect(controller.vm).toBeUndefined();
		});
		var jsonFormat = [{"Id":"1","UserName":"Sam Smith"},
							{"Id":"2","UserName":"Fred Frankly"},
							{"Id":"1","UserName":"Zachary Zupers"}
						];
		describe("Action Handlers", function(){
			it('CSV data should populate correctly', function() {
			    expect(controller.csvData.length).toEqual(0);
			    controller.processData();
			    controller.csvData = jsonFormat;
			    expect(controller.csvData.length).toEqual(3);
			});

			it('Filter Minimal Issue Code', function() {
				controller.csvData = [1, 2, 0, 3];
			    expect(controller.csvData).toEqual([1, 2, 0, 3]);
			    controller.filterMinimal();
			    expect(controller.csvData).toBeTruthy([0, 1, 2, 3]);
			    controller.resetValues();
			    expect(controller.csvData).toEqual([1, 2, 0, 3]);
			});
		});
	});
}());