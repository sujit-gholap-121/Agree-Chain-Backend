import mongoose from "mongoose";

const bussinessSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    mobile_prefix: {
      type: Number,
    },
    mobile: {
      type: Number,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    accountImg: {
      type: String,
    },
  },
  { timestamps: true }
);

const Bussiness = mongoose.model("Bussiness", bussinessSchema);
export default Bussiness;
