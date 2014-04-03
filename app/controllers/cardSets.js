'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    CardSet = mongoose.model('CardSet'); //,
    //_ = require('lodash');

/**
 * Create a Set List
 */
exports.create = function(req, res) {
    var cardSet = new CardSet(req.body);

    cardSet.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                cardSet: cardSet
            });
        } else {
            res.jsonp(cardSet);
        }
    });
};

/**
 * List of CardSet
 */
exports.all = function(req, res) {
    CardSet.find().sort('code').exec(function(err, sets) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(sets);
        }
    });
};
