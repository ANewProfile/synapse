import mongoose, { connect } from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (e) {
    console.error(`Error occured while connecting DB ${e.message}`);
    process.exit(1);
  }
};

export default ConnectDb;
