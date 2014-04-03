'use strict';

// Articles routes use articles controller
var cardSets = require('../controllers/cardSets');
//var cards = require('../controllers/cards');
var authorization = require('./middlewares/authorization');

// authorization helpers
var isAdminUser = function(req, res, next) {
    if (!req.user.isAdmin) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/api/sets', authorization.requiresLogin, isAdminUser, cardSets.all);
    app.post('/api/sets', authorization.requiresLogin,  isAdminUser, cardSets.create);

    // Finish with setting up the articleId param
    //app.param('articleId', articles.article);

};
