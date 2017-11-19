(function(){
	'use strict';

	PieController.$inject = ['$scope']
	function PieController($scope) {
		var vm = this;
		vm.model = {
	    	name: "controllerAs vm test"
	  	};
	  	$scope.eatSlice = function(){
	  		if($scope.slices){
	  			$scope.slices--;
	  		}
	  	}
	  	$scope.slices = 8;
	}

	angular.module('pie', [])
	.controller('PieController', PieController);
}());