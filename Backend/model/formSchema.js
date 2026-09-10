import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  { timestamps: true },
);

export const Contact = mongoose.model("Contact", contactSchema);
