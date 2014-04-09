'use strict';

var mongoose = require('mongoose'),
	Inventory = mongoose.model('Inventory');

exports.inventory = function(req, res, next, id) {
	Inventory.load(id, function(err, inv) {
		if (err) return next(err);
		if (!inv) return next(new Error('Failed to load inventory ' + id));
		req.inventory = inv;
		next();
	});
};

exports.show = function(req, res) {
	res.jsonp(req.inventory);
};

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

exports.addCard = function(req, res) {
	Inventory
	.findByIdAndUpdate(
		{_id:req.inventory._id},
		{$push: {cards: req.body.cardId}},
		{safe: true, upsert: true},
		function(err, inv) {
			if(err)throw err;
			res.jsonp(inv);
		});
};

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
