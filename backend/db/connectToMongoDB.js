import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("[all good database is loaded]");
  } catch (err) {
    console.log(err);
  }
};

export default connectToMongoDB;
