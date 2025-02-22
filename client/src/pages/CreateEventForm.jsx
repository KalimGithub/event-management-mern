import React, { useState } from "react";
import { eventCreateApi } from "../service/eventApiService";
import { Link, useNavigate } from "react-router-dom";
function CreateEventForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [category, setCategory] = useState("online");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await eventCreateApi({
      name,
      category,
      startDate,
      endDate,
      time,
      venue,
      description,
    });
    // console.log(response);
    navigate("/dashboard");
    // console.log("form submitted");
  };
  return (
    <div className="flex flex-col items-center justify-center w-[40vw] my-6 rounded-lg border shadow px-6 py-4 mx-auto mt-[100px]">
      <h1 className="text-lg font-semibold font-mono">Create Event Form</h1>
      <form
        className="flex flex-col items-center justify-between gap-2 w-[80%]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 w-full my-1">
          <label htmlFor="name">Enter Event Name:</label>
          <input
            type="text"
            placeholder="Enter Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border w-full rounded mb-2"
            required
          />
        </div>

        <div className="flex flex-col gap-2 w-full my-1">
          <label htmlFor="description">Enter Description:</label>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-2 border w-full rounded mb-2"
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full my-1">
          <label htmlFor="venue">Enter Venue:</label>
          <input
            type="venue"
            placeholder="Enter Venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="px-4 py-2 border w-full rounded mb-2"
            required
          />
        </div>

        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="startDate">Enter Start Date:</label>
            <input
              type="date"
              placeholder="Enter Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="px-4 py-2 border w-full rounded mb-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="endDate">Enter End Date:</label>
            <input
              type="date"
              placeholder="Enter End Date"
              value={endDate}
              onChange={(e) => {
                let eventEndDate = +new Date(startDate);
                let eventStartDate = +new Date(e.target.value);

                if (eventEndDate - eventStartDate > 0) {
                  alert("End date should be greater than start date");
                  setEndDate("");
                } else {
                  setEndDate(e.target.value);
                }
              }}
              className="px-4 py-2 border w-full rounded mb-2"
              required
            />
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="time">Enter Time:</label>
            <input
              type="time"
              id="time"
              placeholder="Enter Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="px-4 py-2 border w-full rounded mb-2"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="category">Choose a category:</label>
            <select
              name="category"
              id="category"
              className="px-4 py-2 border w-full rounded mb-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 w-full justify-between">
          <button
            className="text-white bg-blue-500 cursor-pointer px-3 py-2 rounded text-center"
            type="submit"
          >
            Create Event
          </button>
          <button>
            <Link
              to="/dashboard"
              className="cancel-btn text-white bg-red-500 cursor-pointer px-5 py-2 rounded text-center"
            >
              Cancel
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEventForm;
