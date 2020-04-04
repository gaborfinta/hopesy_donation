class Donation {
    constructor(donationAttributes) {
        Donation.keys.forEach(key => {
            this[key] = null;
        });

        Object.keys(donationAttributes).forEach(key => {
            if(donationAttributes[key] !== undefined) {
                this[key] = donationAttributes[key];
            }
        });
    }

    static getKeys () {
        return Donation.keys;
    }

    serialize() {
        let u = {};
        Donation.keys.forEach(key => {
            u[key] = this[key];
        });
        return u;
    }

    validate() {
        
    }
}

Donation.keys = ["id", "cause_id", "sender", "receiver_id", "amount", "time_of_transaction"]

module.exports = Donation;