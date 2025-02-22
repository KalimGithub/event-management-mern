import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CreateEventForm from "./pages/CreateEventForm";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/create-event-form" element={<CreateEventForm />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
    </>
  );
}

export default App;
