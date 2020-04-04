class Donation {
    constructor(donationAttributes) {
        User.keys.forEach(key => {
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

    validate() {
        
    }
}

Donation.keys = ["id", "cause_id", "sender", "receiver_id", "amount", "time_of_transaction"]

module.exports = Donation;