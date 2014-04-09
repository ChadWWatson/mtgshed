'use strict';
var parseMana = function(manaCost, callback) {
	var re = /{([^}]*)}/g;
	var token;
	var tokens = [];
	while (token = re.exec(manaCost)) {
		tokens.push(token[1].replace('/',''));
	}
	callback(tokens);
};
angular
	.module('mtgshed.system')
	.directive('fileUpload', function () {
		return {
			scope: true,        //create a new scope
			link: function (scope, el) {
				el.bind('change', function (event) {
					var files = event.target.files;
					//iterate files since 'multiple' may be specified on the element
					for (var i = 0;i<files.length;i++) {
						//emit event upward
						scope.$emit('fileSelected', { file: files[i] });
					}
				});
			}
		};
	});

angular
	.module('mtgshed.system')
	.directive('manaCost', function () {
		return {
			restrict: 'A',
			scope: true,        //create a new scope
			link: function (scope, el, attrs) {
				parseMana(attrs.value, function(mana) {
					el.empty();
					var token;
					while(token = mana.pop() ) {
							el.prepend('<div class="mana-' + token + '-icon-xs"></div>');
					}
				});
			}
		};
	});