const mongoose = require ("mongoose");

// Connecting mongodb usin mongoose

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected Successfully!");
    } catch (error) {
        console.log("Mongodb connection failed!", error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
