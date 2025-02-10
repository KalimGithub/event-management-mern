import Event from "../models/event.model.js";

const createEventController = async (req, res) => {
  const { name, description, startDate, endDate, time, venue, category } =
    req.body;

  try {
    const newEvent = await Event.create({
      name,
      description,
      startDate,
      endDate,
      time,
      venue,
      category,
    });
    await newEvent.save();
    // console.log(newEvent);
    return res.status(200).json("create event success");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const editEventController = async (req, res) => {
  const { name, description, startDate, endDate, time, venue, category } =
    req.body;
  const id = req.params.id;
  // console.log(id);
  try {
    const eventDb = await Event.findById(id);
    if (!eventDb) return res.status(400).json("No Event Found");
    const updatedEvent = await Event.findByIdAndUpdate(
      { _id: id },
      {
        name,
        description,
        startDate,
        endDate,
        time,
        venue,
        category,
      }
    );
    return res.send({
      status: 200,
      message: "Event Updated Successfully",
      data: updatedEvent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

const deleteEventController = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEvent = await Event.findByIdAndDelete(id);
    return res.send({
      status: 200,
      message: "Event Deleted Successfully",
      data: deletedEvent,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Server Error");
  }
};

export { createEventController, editEventController, deleteEventController };
