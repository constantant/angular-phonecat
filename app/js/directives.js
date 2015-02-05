'use strict';

/* Directives */
angular.module('scroll', []).directive('whenScrolled', function() {
	return function(scope, elm, attr) {
		window.onscroll = function () {
			if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
				scope.$apply(attr.whenScrolled);
			}
		};
	};
});