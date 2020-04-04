const DonationsStoreLocal = require('./donation.array_local');
const DonationsStoreFirebase = require('./donations.firestore');

function DataStoreFactory(env) {
    if (env === "local") {
        return {
            "donationsStore": new DonationsStoreLocal(),
        }
    } else if (env == "firebase") {
        return {
            "donationsStore": new DonationsStoreFirebase(),
        }
    }
}

module.exports = DataStoreFactory;