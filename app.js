const express = require('express');
const createRouter = require('./src/router');

function createApp(datastore) {
    app = express();
    app.use(express.json());
    app.use('/', createRouter(datastore.donationStore));
    return app;
}

module.exports = createApp;