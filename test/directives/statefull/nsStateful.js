(function(){
    'use strict';
    
	describe("nsStateful Initialization", function(){
		var $rootScope, $scope, $compile, el, $body = $('body'), simpleHtml ='<button ns-stateful="red"></button>';
		beforeEach(function(){
			module('pie');
			inject(function($injector) {
		        $rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				$compile = $injector.get("$compile");
				el = $compile(angular.element(simpleHtml))($scope);
		    });
		});
		$body.append(el);
		//$scope.$digest();
		it('Should be able to toggle the class based on clicks', function() {
		    expect(el.hasClass("red")).toBeFalsy();
		    el.click();
		    expect(el.hasClass("red")).toBeTruthy();
		    el.click();
		    expect(el.hasClass("red")).toBeFalsy();
		});

		it('Should throw error when compiled with an empty name', function() {
		    expect(function(){
		    	$compile(angular.element('<a ns-stateful></a>'))($scope);
		    }).toThrow();
		});
		
	});
}());