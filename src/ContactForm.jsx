import { useState } from "react";
import  "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate EmailJS, Backend API, or Firebase here
    console.log("Form Data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container my-5 min-vh-60 min-vw-40" >
      <h2 className="text-center text-white">Contact Me</h2>
      {submitted ? (
        <>
        <p className="text-success text-center">Thank you! I'll get back to you soon.</p>
        <button onClick={() => setSubmitted(false)} className="btn btn-primary">
            Back
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
