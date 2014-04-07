'use strict';

// Articles routes use articles controller
var cardSets = require('../controllers/cardSets');
var cards = require('../controllers/cards');
var inventorys = require('../controllers/inventory.js');
var authorization = require('./middlewares/authorization');

// authorization helpers
var isAdminUser = function(req, res, next) {
    if (!req.user.isAdmin) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/api/inventory', inventorys.all);
    app.get('/api/inventory/user/:userId', inventorys.byUser);
    app.post('/api/inventory', authorization.requiresLogin, inventorys.create);
    app.get('/api/inventory/:inventoryId', inventorys.show);

    // Finish with setting up the inventoryId param
    app.param('inventoryId', inventorys.inventory);
};
