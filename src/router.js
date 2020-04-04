const express = require('express');
const addRoutes = require('./controllers/donations');


function createRouter(datastore) {
    const router = express.Router();
    addRoutes(router, datastore);
    return router;
}

module.exports = createRouter;