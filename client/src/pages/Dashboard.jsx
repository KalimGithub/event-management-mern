import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutApi } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { dashboardApi } from "../service/eventApiService";
import EventCard from "../components/EventCard";
import Loader from "../components/Loader";

function Dashboard() {
  const [eventData, setEventData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await dashboardApi();
        setIsLoading(true);
        setEventData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getEvents();
  }, []);

  const handleLogout = async () => {
    await logoutApi();
    alert("Logged out");
    setIsLoading(true);
    navigate("/login");
  };
  return (
    <>
      <div className="container  w-full mx-0 my-[100px]">
        <h1 className="text-center font-mono">Event Dashboard🚀</h1>
        <p className="text-center text-gray-500">
          Welcome to the Event Management Dashboard 😊.
          <br></br>
          <span className="max-w-[1/2]">
            Explore the magic of our application 'EVENTIFY'. A go-to solution
            for managing amazing events effortlessly. From easy sign-ups to
            registering and managing event schedules, our user-friendly platform
            has everything you need for a flawless experience. With powerful
            features, trust our system to handle the details, and let's bring
            your event vision to life!!!
          </span>
        </p>
        <div className="flex justify-end mx-0 w-full text-white !important gap-2 mt-12 mb-0">
          <Link
            to={"/create-event-form"}
            className="font-semibold min-w-[150px] hover:shadow-2xl create-btn border-blue-500 border-2 px-8 py-2 rounded"
          >
            Create Event
          </Link>
          <button
            className="logout-btn min-w-[150px] font-semibold bg-blue-500 px-8 py-2 rounded border-2 border-blue-500 hover:bg-transparent hover:text-blue-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

        {/* upcoming events */}
        <>
          <div className="w-auto">
            <h3 className="table-heading">Upcoming Events</h3>
            <div className=" h-[2px] bg-slate-400 relative top-[-34px] left-12"></div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map((event, index) => {
                return <EventCard event={event} key={index} />;
              })}
            </tbody>
          </table>
        </>
        {/* past Events */}
        <>
          <div className="flex flex-col items-start justify-center">
            <h3 className="table-heading">Past Events</h3>
            <div className="h-[2px] w-full bg-slate-400 relative top-[-34px] left-12"></div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Time</th>
                <th>Venue</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map((event, index) => {
                return <EventCard event={event} key={index} />;
              })}
            </tbody>
          </table>
        </>
      </div>
      {isLoading ? <Loader /> : null}
    </>
  );
}

export default Dashboard;
