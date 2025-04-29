import User from "../models/user.model.js";

import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { username, name, password, confirmPassword, email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "invalid Email Format",
      });
    }

    const existingUser = await User.findOne({
      username,
    });

    if (existingUser) {
      return res.status(400).json({
        error: "UserName Taken Already",
      });
    }

    const existingEmail = await User.findOne({
      email,
    });
    if (existingEmail) {
      return res.status(400).json({
        error: "Email Taken Already",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords dont match",
      });
    }

    //create and push new user from here
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      name,
      email,
      password: hashedPass,
    });
    // gotta generate jwt token
  } catch (e) {
    console.error("signing up controller error", e);
    res.status(400).json({
      error: "invalid sign up data input",
    });
  }
};
