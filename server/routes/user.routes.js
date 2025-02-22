import express from "express";
import {
  userLoginController,
  userLogoutController,
  userRegisterController,
} from "../controllers/user.controllers.js";
import { isAuth } from "../middlewares/isAuth.js";

const userRouter = express.Router();

userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);
userRouter.post("/logout", isAuth, userLogoutController);

export default userRouter;
