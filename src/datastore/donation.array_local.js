const Donation = require('../models/donation');
const DataStore = require('./datastore');

class DonationStoreLocal extends DataStore {
    constructor() {
        super();
        this.donationCount = 0;
        dummyDonation = new Donation()
        this.donations = {};
    }

    save(donation) {
        donation.id = this.donationCount++;
        this.donations[donation.id] = donation;
        return donation.id;
    }

    getById(id) {
        return this.donations[id];
    }

    getAll() {
        let donationList = [];
        Object.keys(this.donations).forEach(id => {
            donationList.push(this.donations[id])
        });;
        return donationList;
    }

    patch(donation) {
        this.donations[donation.id] = donation;
        return donation.id;
    }
}

module.exports = DonationStoreLocal;