function throwNotImplementedError() {
    throw new TypeError('Function not implemented');
}

class DataStore {
    constructor() {
        if (this.constructor === DataStore) {
            throw new TypeError('Abstract class "DataStore" cannot be instantiated directly.'); 
        }
    }

    save(donation) {
        throwNotImplementedError();
    }

    getById(id) {
        throwNotImplementedError();
    }

    getAll() {
        throwNotImplementedError();
    }
}

module.exports = DataStore;