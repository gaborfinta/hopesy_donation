const DonationsStoreLocal = require('./donation.array_local');
const DonationsStoreFirebase = require('./donation.firestore');

function DataStoreFactory(env) {
    if (env === "local") {
        return {
            "donationStore": new DonationsStoreLocal(),
        }
    } else if (env === "firebase") {
        return {
            "donationStore": new DonationsStoreFirebase(),
        }
    }
}

module.exports = DataStoreFactory;