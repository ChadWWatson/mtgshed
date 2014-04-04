'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Set Schema
 */
var CardSetSchema = new Schema({
    booster: [String],
    border: {
        type: String,
        default: '',
        trim: true
    },
    gathererCode: {
        type: String,
        default: '',
        trim: true
    },
    releaseDate: Date,
    name: {
        type: String,
        default: '',
        trim: true
    },
    code: {
        type: String,
        default: '',
        trim: true,
        unique: true
    }
});

/**
 * Validations
 */
CardSetSchema.path('code').validate(function(code) {
    return code.length;
}, 'Code cannot be blank');


mongoose.model('CardSet', CardSetSchema);
