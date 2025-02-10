import React, { useState } from "react";
import { eventDeleteApi, eventEditApi } from "../service/eventApiService";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function EventCard(event) {
  // console.log(event);
  const [show, setShow] = useState(false);
  const [name, setName] = useState(event.event.name);
  const [description, setDescription] = useState(event.event.description);
  const [startDate, setStartDate] = useState(event.event.startDate);
  const [endDate, setEndDate] = useState(event.event.endDate);
  const [time, setTime] = useState(event.event.time);
  const [venue, setVenue] = useState(event.event.venue);
  const [category, setCategory] = useState(event.event.category);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = async () => {
    setShow(!show);
    console.log("Edit button clicked");
    const response = await eventEditApi(
      { id: event.event._id },
      { data: { name, description, startDate, endDate, time, venue, category } }
    );
    console.log(name, description, startDate, endDate, time, venue, category);
    console.log(response);
    console.log("Event Edited successfully");
    setIsLoading(true);
    navigate("/dashboard");

    window.location.reload();
  };

  const handleDelete = async () => {
    if (confirm("Are you sure want to delete this Event?")) {
      const response = await eventDeleteApi({ id: event.event._id });
      if (response.status === 200) {
        console.log("Event deleted successfully");
      }
    }
    window.location.reload();
  };
  return (
    <>
      <tr>
        <td>{event.event.name}</td>
        <td>{event.event.category}</td>
        <td>{event.event.startDate}</td>
        <td>{event.event.endDate}</td>
        <td>{event.event.time}</td>
        <td>{event.event.venue}</td>
        <td className="text-start">{event.event.description}</td>
        <td className="flex gap-2 items-center justify-center px-2">
          <button
            className="px-4 py-2 bg-blue-500 cursor-pointer text-white rounded"
            onClick={handleShow}
          >
            Edit
          </button>
          <button
            className="px-4 py-2 bg-red-500 cursor-pointer text-white rounded"
            onClick={handleDelete}
          >
            Delete X
          </button>
        </td>
      </tr>
      {/* <EditEventForm /> */}
      {/* modal for editing the event */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="event-edit-modal flex flex-col items-center justify-center"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-full">
            Edit Event Form
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleEdit}>
          <Modal.Body className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-start w-full">
              <label className="text-left" htmlFor="name">
                Enter Event Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Event Name"
                className="w-full mx-0 my-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-left" htmlFor="name">
                Enter Event Description:
              </label>
              <input
                type="text"
                placeholder="Enter description"
                className="w-full mx-0 my-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-left" htmlFor="name">
                Enter Event Venue:
              </label>
              <input
                type="text"
                placeholder="Enter Venue"
                value={venue}
                className="w-full mx-0 my-2"
                onChange={(e) => setVenue(e.target.value)}
                required
              />
            </div>
            <div className="flex gap-2 w-full m-0">
              <div className="flex flex-col items-start w-1/2">
                <label className="text-left" htmlFor="startDate">
                  Enter Start Date:
                </label>
                <input
                  type="date"
                  placeholder="Enter Start Date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                  className="mx-0 my-2"
                />
              </div>
              <div className="flex flex-col items-start w-1/2">
                <label className="text-left" htmlFor="startDate">
                  Enter End Date:
                </label>
                <input
                  type="date"
                  placeholder="Enter End Date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className="mx-0 my-2"
                />
              </div>
            </div>

            <div className="flex w-full  gap-2 items-start">
              <div className="flex flex-col items-start w-1/2">
                <label className="text-left" htmlFor="time">
                  Enter Time:
                </label>
                <input
                  type="time"
                  placeholder="Enter Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="mx-0 my-2"
                />
              </div>
              <div className="flex flex-col items-start w-1/2">
                <label className="text-left" htmlFor="category">
                  Choose a category:
                </label>
                <select
                  name="category"
                  id="category"
                  className="mx-0 my-2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Edit Event
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      {isLoading ? <Loader /> : null}
    </>
  );
}

export default EventCard;
