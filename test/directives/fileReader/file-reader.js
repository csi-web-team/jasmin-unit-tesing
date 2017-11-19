/* Author: Ranjith R
   Date: 19-11-2017 
   fileReader directive functionality Test spec
   Unit Test case followed by Jasmine and Karma test code runner by Javascript 
*/
(function(){
    'use strict';
    
	describe("fileReader Initialization", function(){
		var $rootScope, $scope, $compile, el, $body = $('body'), simpleHtml ='<input type="file" file-reader="data"/>', controller, directiveElem;
		beforeEach(function(){
			module('csv');
			inject(function($injector) {
		        $rootScope = $injector.get('$rootScope');
				$scope = $rootScope.$new();
				$compile = $injector.get("$compile");
				el = $compile(angular.element(simpleHtml))($scope);
				controller = $injector.get('$controller')('TableController',{$scope:$scope});
		    });
		    directiveElem = getCompiledElement();
		});
		function getCompiledElement(){
	        var element = angular.element('<div ng-controller="TableController as vm"><input id ="upload" type="file" file-reder="myFolder"/></div>');
	        var compiledElement = $compile(element)($rootScope);
	        $rootScope.clickUpload = function(){
	            angular.element('#upload').trigger('click');
	        };
	        $rootScope.$digest();
	        return compiledElement;
	    }
		$body.append(el);
		//$scope.$digest();
		it('Should be able to call when import files on change', function() {
			var fileList = '"name" "ranjith"';
	        var inputElement = el.find('input');
	        console.log(inputElement)
	        inputElement.files = fileList;
	        directiveElem.triggerHandler({
	            type: 'change',
	            target: {
	                files: fileList
	            }
	        });
			expect(controller.fileContent).toBeUndefined(true);
			$rootScope.$digest();
        	inputElement.triggerHandler('click');
		});		
	});
}());