const admin = require('firebase-admin');
const DataStore = require('./datastore');
const Donation = require('../models/donation');

class DonationStoreFirebase extends DataStore {
    constructor() {
        super();
    }

    async save(donation) {
        const { id } = donation;
        if (id === undefined) {
            throw Error("Donation id not defined");
        }

        let donationReference = await admin.firestore().collection('donations').doc(id);
        let donationRecord = await donationReference.get();
        if (donationRecord.exists) {
            throw Error("Donation already exists in firestore");
        }

        await admin.firestore().collection('donations').doc(id).set(donation.serialize());

        return id;
    }

    async getById(id) {
        let donationReference = await admin.firestore().collection('donations').doc(id);
        let donationRecord = await donationReference.get();
        let donation = { id };
        Donation.keys.forEach(key => { donation[key] = donationRecord.get(key); });
        return new Donation(donation);
    }

    async getAll() {
        let donationList = [];
        const donations = await admin.firestore().collection('donations').get();
        donations.forEach(donationSnapshot => {
            let donation = { "id": donationSnapshot.id };
            Donation.keys.forEach(key => { donation[key] = donationSnapshot.get(key); });
            donationList.push(new Donation(donation));
        });

        return donationList;

    }
}

module.exports = DonationStoreFirebase;