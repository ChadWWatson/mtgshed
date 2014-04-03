'use strict';

//Global service for global variables
angular.module('mtgshed.system').factory('Global', [
    function() {
        var _this = this;
        var isAdmin = false;
        console.log(window.user);
        if ( window.user != null ) {
            isAdmin = window.user.isAdmin;
        }
        _this._data = {
            user: window.user,
            authenticated: !! window.user,
            isAdmin: isAdmin
        };

        return _this._data;
    }
]);
