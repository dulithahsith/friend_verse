import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import mongoose from "mongoose";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });
    const accessToken = jwt.sign(
      { email: existingUser.email, id: existingUser._id, type: "access" },
      "test",
      {
        expiresIn: "15m",
      },
    );
    res.status(200).json({ result: existingUser, accessToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists." });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords don't match." });
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    const accessToken = jwt.sign(
      { email: result.email, id: result._id, type: "access" },
      "test",
      {
        expiresIn: "15m",
      },
    );
    const refreshToken = jwt.sign(
      { email: result.email, id: result._id, type: "refresh" },
      "refresh",
      {
        expiresIn: "7d",
      },
    );
    res.status(200).json({ result: result, accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: "Somethin went wrong." });
  }
};

export const refresh = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    return res.status(401).json({ message: "No Refresh Token" });
  }
  try {
    const decoded = jwt.verify(refreshToken);
    if (decoded.type !== "refresh") {
      return res.status(403).json({ message: "Invalid token type" });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newAccessToken = jwt.sign(
      { email: user.email, id: user._id, type: "access" },
      "test",
      {
        expiresIn: "15m",
      },
    );

    return res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(403).json({ message: "Refresh Token Expired or Invalid." });
  }
};
