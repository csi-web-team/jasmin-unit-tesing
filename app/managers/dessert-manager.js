/* Author: Ranjith R
   Date: 19-11-2017 
   Angular Version: v1.6.6
   Angular DessertManager Factory Provider initiated 
*/
(function(){
	'use strict';

	var dessertMarks = {
		pies: [
			{flavor: "Cherry", score: 6},
			{flavor: "Apple", score: 8.9},
			{flavor: "Peach", score: 4},
		]
	};

	var dessertManager = function(dessertValues){
		return {
			pieFlavors: function(){
				return dessertValues.pies.map(function(pie){
					return pie.flavor;
				})
			}
		}
	}
	angular.module('pie')
	.value('DessertValues', dessertMarks)
	.factory('DessertManager', ['DessertValues', dessertManager]);
}());