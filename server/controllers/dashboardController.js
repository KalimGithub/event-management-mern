import Event from "../models/event.model.js";

const dashboardController = async (req, res) => {
  try {
    const eventsDb = await Event.find().sort({ date: -1 });
    if (!eventsDb)
      return res.send({
        status: 400,
        message: "No events found",
      });
    return res.send({
      status: 200,
      message: "Events found",
      data: eventsDb,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

export { dashboardController };
