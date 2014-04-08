'use strict';

angular.module('mtgshed', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.bootstrap.collapse', 'ui.bootstrap.dropdownToggle', 'ui.router', 'mtgshed.system', 'mtgshed.services', 'mtgshed.articles', 'mtgshed.setlists', 'mtgshed.admin', 'mtgshed.dashboard']);

angular.module('mtgshed.system', []);
angular.module('mtgshed.services', []);
angular.module('mtgshed.admin', []);
angular.module('mtgshed.articles', []);
angular.module('mtgshed.setlists', []);
angular.module('mtgshed.dashboard', []);