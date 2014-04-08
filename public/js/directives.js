'use strict';
angular.module('mtgshed.system').directive('fileUpload', function () {
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