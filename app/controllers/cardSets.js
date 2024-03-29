'use strict';

var mongoose = require('mongoose'),
CardSet = mongoose.model('CardSet');

exports.create = function(req, res) {
	var cardSet = new CardSet(req.body);
	CardSet
		.find({ code: cardSet.code })
		.remove(function(err) {
			if (err) {
				return res.send('500', { errors: err.errors, cardSet: cardSet });
			} else {
				cardSet
					.save(function(err) {
						if (err) {
							return res.send('500', { errors: err.errors, cardSet: cardSet });
						} else {
							res.jsonp(cardSet);
						}
					});
			}
		});
};

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
