/* Author: Ranjith R
   Date: 19-11-2017 
   Angular Version: v1.6.6
   Angular titleCase filter initiated
*/
(function(){
	'use strict';

	var titleCase = function(){
		function $filerVal(val) {
			let filterM = function(valM){
				return valM.replace(/\w\S*/g, function(txt){	
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
				});
			}
			return val ? filterM(val) : val;
		};

		return $filerVal;
	}
	angular.module('pie')
	.filter('titleCase', titleCase);
}());