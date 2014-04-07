'use strict';

/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 CardSet = mongoose.model('CardSet'),
 Card = mongoose.model('Card'),
 _ = require('lodash');

/**
 * Create a Set List
 */
 exports.create = function(req, res) {
    var cardCode = req.params.code;
    var cardList = req.body;
    CardSet.findOne({ code: cardCode }, function(error, cardSet){
        _(cardList).forEach(function(card) {
            var dbCard = new Card(card);
            dbCard.cardSet = cardSet;
            dbCard.save(function(err) {
                if ( err !== null ) {
                    console.log(err);
                }
            });
        });
        res.jsonp(true);
    });
};

/**
 * By Name
 */
 exports.byName = function(req, res) {
    res.charset = 'UTF8';
    console.log(req.params.name);
    Card.find({ name: new RegExp(req.params.name,'i') }, function(error, cards){
        console.log(error);
        res.jsonp(cards);
    });
};
 exports.byMultiverseId = function(req, res) {
    res.charset = 'UTF8';
    Card.find({ multiverseid: req.params.mid }, function(error, cards){
        console.log(error);
        res.jsonp(cards);
    });
};



/**
 * List of CardSet
 */
 exports.all = function(req, res) {
    res.charset = 'UTF8';
    CardSet.findOne({ code: req.params.code }, function(error, cardSet){
        console.log(cardSet);
        Card.find({cardSet: cardSet}, function(err, cards) {
            res.jsonp(cards);
        });
    });
};
