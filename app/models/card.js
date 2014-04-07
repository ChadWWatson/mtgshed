'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Card Schema
 */
var CardSchema = new Schema({
    artist: {
        type: String,
        default: '',
        trim: true
    },
    cmc: {
        type: Number
    },
    colors: [String],
    flavor: {
        type: String,
        default: '',
        trim: true
    },
    imageName: {
        type: String,
        default: '',
        trim: true
    },
    layout: {
        type: String,
        default: 'normal',
        trim: true
    },
    manaCost: {
        type: String,
        default: '',
        trim: true
    },
    multiverseid: Number,
    name: {
        type: String,
        default: '',
        trim: true
    },
    power: {
        type: String,
        default: '',
        trim: true
    },
    rarity: {
        type: String,
        default: '',
        trim: true
    },
    subtypes: [String],
    text: {
        type: String,
        default: '',
        trim: true
    },
    toughness: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String,
        default: '',
        trim: true
    },
    types: [String],
    supertypes: [String],
    cardSet: {type: Schema.ObjectId, ref: 'CardSet'}
});

CardSchema.virtual('imageUrl').get(function() {
  return '//gatherer.wizards.com/Handlers/Image.ashx?multiverseid=' + this.multiverseid + '&type=card';
});

CardSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('cardSet', 'code name').exec(cb);
};

CardSchema.set('toJSON', { getters: false, virtuals: true });

mongoose.model('Card', CardSchema);
