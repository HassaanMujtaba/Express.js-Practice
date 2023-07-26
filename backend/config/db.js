require('dotenv').config();

const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://hassaanmujtaba1:${process.env.MONGODB_PASSWORD}@express-cluster.lakv5oh.mongodb.net/`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
