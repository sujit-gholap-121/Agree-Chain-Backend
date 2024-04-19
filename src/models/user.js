import mongoose from "mongoose";

const userScheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
    accountType:{
      type: String,
      required: true,
      enum:["farmer","trader"]
    },
    address:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"address"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userScheme);
export default User;
