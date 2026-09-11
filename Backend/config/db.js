import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("MongoDB connected Successfully!✅");
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};
