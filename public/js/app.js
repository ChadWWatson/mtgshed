'use strict';

angular.module('mtgshed', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.bootstrap.collapse', 'ui.bootstrap.dropdownToggle', 'ui.router', 'mtgshed.system', 'mtgshed.articles', 'mtgshed.setlists', 'mtgshed.admin', 'mtgshed.dashboard', 'mtgshed.services']);

angular.module('mtgshed.system', []);
angular.module('mtgshed.services', []);
angular.module('mtgshed.admin', []);
angular.module('mtgshed.articles', []);
angular.module('mtgshed.setlists', []);
angular.module('mtgshed.dashboard', []);