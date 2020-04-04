const Donation = require('../models/donation');

const getAll = (datastore) => async (req, res) => {
    const donations = await datastore.getAll();
    res.json(donations);
}

const getById = (datastore) => async (req, res) => {
    const { id } = req.params;
    const donation = await datastore.getById(id);
    res.json(donation);
}

const save = (datastore) => async (req, res) => {
    const donationAttributes = Donation.getKeys();
    let newDonation = {};
    donationAttributes.forEach(attribute => newDonation[attribute] = req.body[attribute]);
    const newId = await datastore.save(new Donation(newDonation));
    res.json({newId});
}

const addRoutes = (router, datastore) => {
    router.get('/', getAll(datastore));
    router.post('/', save(datastore));
    router.get('/:id/', getById(datastore));
}

module.exports = addRoutes;