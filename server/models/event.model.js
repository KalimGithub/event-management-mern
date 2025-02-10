import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    startDate: { type: String, require: true },
    endDate: { type: String, require: true },
    time: { type: String, require: true },
    venue: { type: String, require: true },
    category: { type: String, require: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("event", EventSchema);
export default Event;
