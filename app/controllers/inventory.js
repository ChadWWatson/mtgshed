'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 Card = mongoose.model('Card'),
 CardSet = mongoose.model('CardSet'),
 Inventory = mongoose.model('Inventory'),
 _ = require('lodash');


/**
 * Find inventory by id
 */
exports.inventory = function(req, res, next, id) {
    Inventory.load(id, function(err, inv) {
        if (err) return next(err);
        if (!inv) return next(new Error('Failed to load inventory ' + id));
        req.inventory = inv;
        next();
    });
};

/**
 * Show an inv
 */
exports.show = function(req, res) {
    res.jsonp(req.inventory);
};

/**
 * Create
 */
 exports.create = function(req, res) {
    var inv = new Inventory(req.body);
    inv.user = req.user;
    inv.save(function(err) {
        if ( err !== null ) {
            console.log(err);
        }
        res.jsonp(inv);
    });
};

/**
 * List of CardSet
 */
 exports.all = function(req, res) {
    res.charset = 'UTF8';
    Inventory.find().exec(function(error, inventories){
            res.jsonp(inventories);
    });
};

exports.byUser = function(req, res) {
    Inventory.find({user: req.params.userId}).exec(function(error, inventories){
        res.jsonp(inventories);
    });
};
