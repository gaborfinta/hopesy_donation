const admin = require('firebase-admin');
const functions = require('firebase-functions');
const app = require('./app');

exports.donation = functions.https.onRequest(app);