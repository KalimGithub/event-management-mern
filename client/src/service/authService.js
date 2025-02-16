import axios from "axios";

// const AUTH_URL = "http://localhost:3000/api/user"; // for local development
const AUTH_URL = `https://event-management-mern-gt0l.onrender.com/api/user`; // for deployment

const registerApi = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_URL}/register`, userData, {
      withCredentials: true,
    });
    if (response.data) {
      // console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};

const loginApi = async (userData) => {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, userData, {
      withCredentials: true,
    });
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
const logoutApi = async () => {
  try {
    const response = await axios.post(
      `${AUTH_URL}/logout`,
      {},
      { withCredentials: true }
    );
    // console.log(response);
  } catch (error) {
    console.log("errorr", error);
    return error;
  }
};
export { registerApi, loginApi, logoutApi };
