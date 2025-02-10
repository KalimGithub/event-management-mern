import User from "../models/user.model.js";
import { userDataValidation } from "../utils/userValidation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegisterController = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  // data validation
  try {
    await userDataValidation({ email, password });
  } catch (error) {
    return res.send({
      status: 400,
      message: "Data invalid",
      error: error,
    });
  }
  try {
    const userDb = await User.findOne({ email });
    if (userDb) {
      return res.send({
        status: 400,
        message: "User already Exist",
        data: {
          _id: userDb._id,
          email: userDb.email,
        },
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    console.log(newUser);

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    console.log(token);
    res.cookie("token", token, { httpOnly: true, secure: false });
    console.log(res.cookie);
    // res.cookie("token", token, { httpOnly: true, secure: false });
    return res.send({
      status: 200,
      message: "user registered successfully",
      data: {
        _id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: "Internal server error",
      error: error,
    });
  }
};

const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);
  // data validation
  try {
    await userDataValidation({ email, password });
  } catch (error) {
    return res.send({
      status: 400,
      message: "Data invalid",
      error: error,
    });
  }
  try {
    const userDb = await User.findOne({ email });
    console.log(userDb);
    if (!userDb)
      return res.send({
        stauts: 400,
        message: "no user Found plz register first",
      });
    const isValidPassword = await bcrypt.compare(password, userDb.password);
    if (!isValidPassword) {
      return res.send({ status: 403, message: "Password does not match" });
    }

    const token = jwt.sign({ id: userDb._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });
    // console.log(token);
    console.log(res.cookie);
    res.cookie("token", token, { httpOnly: true, secure: false });
    return res.send({
      status: 200,
      message: "user Login successfully",
      data: {
        _id: userDb._id,
        email: userDb.email,
      },
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: "Internal server error",
      error: error,
    });
  }
};

const userLogoutController = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Logged out Successfully" });
};

export { userRegisterController, userLoginController, userLogoutController };
