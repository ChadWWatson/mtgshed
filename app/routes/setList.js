'use strict';

// Articles routes use articles controller
var setLists = require('../controllers/setLists');
var authorization = require('./middlewares/authorization');

// authorization helpers
var isAdminUser = function(req, res, next) {
    if (!req.user.isAdmin) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/api/setlists', authorization.requiresLogin, isAdminUser, setLists.all);
    app.post('/api/setlists', authorization.requiresLogin,  isAdminUser, setLists.create);

    // Finish with setting up the articleId param
    //app.param('articleId', articles.article);

};
