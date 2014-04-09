'use strict';

// Articles routes use articles controller
var inventorys = require('../controllers/inventory.js');
var authorization = require('./middlewares/authorization');

module.exports = function(app) {

    app.get('/api/inventory', inventorys.all);
    app.get('/api/inventory/user/:userId', inventorys.byUser);
    app.post('/api/inventory', authorization.requiresLogin, inventorys.create);
    app.get('/api/inventory/:inventoryId', inventorys.show);
    app.post('/api/inventory/:inventoryId/cards', inventorys.addCard);

    // Finish with setting up the inventoryId param
    app.param('inventoryId', inventorys.inventory);
};
