'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InventorySchema = new Schema({
    cards: [{ type: Schema.ObjectId, ref: 'Card' }],
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
    }).populate('user', 'name').populate([{ path: 'cards'}, { path: 'cards.cardSet', model: 'CardSet'}]).exec(cb);
};

mongoose.model('Inventory', InventorySchema);
