/* Author: Ranjith R
   Date: 19-11-2017 
   PieController controller functionality Tests spec
   Unit Test case followed by Jasmine and Karma test code runner by Javascript 
*/
(function(){
    'use strict';
    
	describe("PieController Initialization", function(){
		var $rootScope,
			$scope,
			controller;

		beforeEach(function(){
			module('pie');
			inject(function($injector) {
		        $rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				controller = $injector.get('$controller')('PieController',{$scope:$scope});
		    });
		});
	    it('should have model defined and PieController.model.name is equal to controllerAs vm test', function() {
		    expect(controller).toBeDefined();
		    expect(controller.model).toBeDefined();
		    expect(controller.model.name).toEqual("controllerAs vm test");
		});

		it('should not have a property called vm', function() {
		    expect(controller.vm).toBeUndefined();
		});

		describe("Action Handlers", function(){
			describe('eatSlice', function(){
				it('Should decrement the number of slices', function(){
					expect($scope.slices).toEqual(8);
					$scope.eatSlice();
					expect($scope.slices).toEqual(7);
				});

				it('Should decrement the number of slices', function(){
					$scope.slices = 0
					expect($scope.slices).toEqual(0);
				});
			})
		});
	});
}());