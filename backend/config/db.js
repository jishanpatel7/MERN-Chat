const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
const connectDB = async () => {
   try {
        const conn = await mongoose.connect(process.env.mongodburi, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
   });
    console.log(`MongoDB Connected to the Database:${conn.connection.host}😊🌍.`.green.bold.cyan.underline);
    } catch (err) {
        console.error(`Error connecting to the Database. ${err.message}`.red.bold);
        process.exit(1);
    }
}
module.exports = connectDB;

