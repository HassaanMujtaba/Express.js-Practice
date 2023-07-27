require('dotenv').config();

const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://hassaanmujtaba1:helloworld@cluster0.myrym5h.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDb;
