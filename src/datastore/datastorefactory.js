const DonationStoreLocal = require('./donation.array_local');

function DataStoreFactory(env) {
    if (env === "local") {
        return {
            "donationStore": new DonationStoreLocal(),
        }
    } 
}

module.exports = DataStoreFactory;