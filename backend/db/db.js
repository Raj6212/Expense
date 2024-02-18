const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb://localhost:27017/raj")
        console.log('Db Connected')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { db }