'use strict';

//Global service for global variables
angular.module('mtgshed.system').factory('Global', [
    function() {
        var _this = this;
        var isAdmin = false;
        if ( window.user !== null && window.user !== undefined ) {
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
