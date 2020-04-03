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

Donation.keys = ["id", "name", "location", "age", "verified", "anonymous", "bank_account", "profile_pic", "situation"]

module.exports = Donation;