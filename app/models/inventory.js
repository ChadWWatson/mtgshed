'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Card = mongoose.model('Card');


/**
 * Card Schema
 */
var InventorySchema = new Schema({
    cards: [Card],
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    private: {
        type: Boolean,
        default: false
    },
    user: {type: Schema.ObjectId, ref: 'User'}
});


InventorySchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name').exec(cb);
};

mongoose.model('Inventory', InventorySchema);
