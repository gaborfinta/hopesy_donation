function throwNotImplementedError() {
    throw new TypeError('Function not implemented');
}

class DataStore {
    constructor() {
        if (this.constructor === DataStore) {
            throw new TypeError('Abstract class "DataStore" cannot be instantiated directly.'); 
        }
    }

    async save(donation) {
        throwNotImplementedError();
    }

    async getById(id) {
        throwNotImplementedError();
    }

    async getAll() {
        throwNotImplementedError();
    }
}

module.exports = DataStore;