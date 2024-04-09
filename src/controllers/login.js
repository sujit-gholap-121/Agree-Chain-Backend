import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import Bussiness from "../models/bussiness.js";

export async function handleLoginUser(req, res) {
  try {
    const { mobile, email, password } = req.body;
    console.log(req.body);
    if ([mobile, password].some((field) => !field || field.trim === "")) {
      // throw new Error("Invalid Login Credentials");
    }
    const findUser = await User.findOne({ mobile });
    if (findUser) {
      const validPassword = await bcrypt.compare(password, findUser.password);
      if (validPassword) {
        const jwt = JWT.sign({ mobile }, process.env.BCRYPT_SECRET, {
          expiresIn: "3 days",
        });
        res
          .status(201)
          .json({
            msg: "Successfull Login",
            jwt,
            findUser,
          })
          .end();
      } else {
        // throw new Error("Invalid Login Credentials");
      }
    } else {
      // throw new Error("Invalid Login Credentials")
    }
  } catch (e) {
    res.status(402).json({
      msg: e.message,
    });
  }
}

export async function handleLoginBussiness(req, res) {
  try {
    const { mobile, password } = req.body;
    console.log(mobile, password);
    if ([mobile, password].some((field) => !field || field.trim === "")) {
      throw new Error("Invalid mobile or passsword");
    } else {
      const findUser = await Bussiness.findOne({ mobile });
      if (findUser) {
        const validPassword = await bcrypt.compare(password, findUser.password);
        if (validPassword) {
          const jwt = JWT.sign({  mobile }, process.env.BCRYPT_SECRET, {
            expiresIn: "3 days",
          });
          res.cookie("jwt", jwt, { expiresIn: "3 days" });
          res.status(201).json({
            msg: "Successfull Login",
            jwt,
          });
        } else {
          throw new Error("Invalid credentials");
        }
      }
    }
  } catch (e) {
    res.status(401).json({ msg: e.message });
  }
}
