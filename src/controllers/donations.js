const Donation = require('../models/donation');

const cors = require('cors');

const corsOptions = {
    origin: true,
}

const getAll = (datastore) => async (req, res) => {
    const donations = await datastore.getAll();
    res.header("Access-Control-Allow-Origin", "*");
    res.json(donations);
}

const getById = (datastore) => async (req, res) => {
    const { id } = req.params;
    const donation = await datastore.getById(id);
    res.header("Access-Control-Allow-Origin", "*");
    res.json(donation);
}

const save = (datastore) => async (req, res) => {
    const donationAttributes = Donation.getKeys();
    let newDonation = {};
    donationAttributes.forEach(attribute => newDonation[attribute] = req.body[attribute]);
    const newId = await datastore.save(new Donation(newDonation));
    res.header("Access-Control-Allow-Origin", "*");
    res.json({newId});
}

const addRoutes = (router, datastore) => {
    router.get('/', cors(corsOptions), getAll(datastore));
    router.post('/', cors(corsOptions), save(datastore));
    router.get('/:id/', cors(corsOptions), getById(datastore));
    router.options('/', cors(corsOptions));
    router.options('/:id/', cors(corsOptions));
}

module.exports = addRoutes;