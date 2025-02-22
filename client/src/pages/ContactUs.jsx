import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    // border-gray-900  my-2console focus:outline-blue-500.log("Form submitted:", formData);
    setSubmitted(true);

    // Here you can send data to a backend API
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <div className="max-w-md mx-auto px-8 py-10 bg-white shadow-lg rounded-2xl mt-34">
      {submitted ? (
        <div className="text-center">
          <p className="text-green-600 text-center">
            Your Message is sent successfully!! Thank you for your message!
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mx-auto rounded mt-4"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", message: "" });
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-center mb-4">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-900 rounded my-2 focus:outline-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-900 rounded my-2 focus:outline-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-900 rounded my-2 focus:outline-blue-500"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactUs;
