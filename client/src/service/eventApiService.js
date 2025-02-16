import axios from "axios";

// const API_URL = "http://localhost:3000/api/dashboard"; // for local development
const API_URL = `https://event-management-mern-gt0l.onrender.com/api/dashboard`; // for deployment

const dashboardApi = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    if (response.data) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

const eventEditApi = async ({ id }, { data }) => {
  try {
    // console.log("edit id", id);
    const response = await axios.post(`${API_URL}/event/edit/${id}`, {
      ...data,
    });
    if (response.data) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
  // try {
  //   const response = await axios.get(`${API_URL}`);
  //   if (response.data) {
  //     console.log(response.data);
  //     return response.data;
  //   }
  // } catch (error) {
  //   console.error(error);
  //   return error;
  // }
};

const eventCreateApi = async ({
  name,
  category,
  startDate,
  endDate,
  time,
  venue,
  description,
}) => {
  try {
    const response = await axios.post(`${API_URL}/event/create`, {
      name,
      category,
      startDate,
      endDate,
      time,
      venue,
      description,
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
const eventDeleteApi = async ({ id }) => {
  try {
    const response = await axios.post(`${API_URL}/event/delete/${id}`);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export { dashboardApi, eventEditApi, eventCreateApi, eventDeleteApi };
