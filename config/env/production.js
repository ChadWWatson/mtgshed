'use strict';

module.exports = {
    db: 'mongodb://chadw:Boris1012@oceanic.mongohq.com:10041/mtgshed',
    app: {
        name: 'MTG Shed'
    },
    facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'c06065d681d3ec03dd2e',
        clientSecret: '42dba95daea2b34977d13069c05e884e4a394ed3',
        callbackURL: 'http://mtgshed.herokuapp.com/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
