(function(){
	angular.module('pie')
	.directive('nsStateful',component);

	function component(){
		var directives = {
			restrict: 'A',
			scope: false,
			link: link
		}

		return directives;

		function link(scope, elem, attrs){
			if(!attrs.nsStateful){
				throw "You must provide a class in";
			}

			elem.bind('click', function(e){
				scope.$apply(function(){
					if(!elem.hasClass(attrs.nsStateful)){
						elem.addClass(attrs.nsStateful);
					}else{
						elem.removeClass(attrs.nsStateful);
					}
				});
			})
		}
	}
}());