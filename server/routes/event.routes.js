import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { dashboardController } from "../controllers/dashboardController.js";
import {
  createEventController,
  deleteEventController,
  editEventController,
} from "../controllers/event.controller.js";

const eventRouter = express.Router();

eventRouter.get("/", isAuth, dashboardController);
eventRouter.post("/event/create", isAuth, createEventController);
eventRouter.post("/event/delete/:id", isAuth, deleteEventController);
eventRouter.post("/event/edit/:id", isAuth, editEventController);

export default eventRouter;
