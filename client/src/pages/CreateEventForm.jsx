import React, { useState } from "react";
import { eventCreateApi } from "../service/eventApiService";
import { useNavigate } from "react-router-dom";
function CreateEventForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [category, setCategory] = useState("");
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
    console.log(response);
    navigate("/dashboard");
    console.log("form submitted");
  };
  return (
    <div>
      <h1>Create Event Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          placeholder="Enter Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Enter End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          type="time"
          placeholder="Enter Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          type="venue"
          placeholder="Enter Venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        />
        <label htmlFor="category">Choose a category:</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEventForm;
