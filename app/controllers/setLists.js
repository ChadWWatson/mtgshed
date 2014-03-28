'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    SetList = mongoose.model('SetList'); //,
    //_ = require('lodash');

/**
 * Create a Set List
 */
exports.create = function(req, res) {
    var setlist = new SetList(req.body);
    setlist.user = req.user;

    setlist.save(function(err) {
        if (err) {
            return res.send('500', {
                errors: err.errors,
                setlist: setlist
            });
        } else {
            res.jsonp(setlist);
        }
    });
};

/**
 * List of SetLists
 */
exports.all = function(req, res) {
    SetList.find().sort('code').populate('user', 'name username').exec(function(err, sets) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(sets);
        }
    });
};
