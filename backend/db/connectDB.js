import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("[all good database is loaded]");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
