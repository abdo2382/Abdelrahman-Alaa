import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d6scdba", // your service ID
        "template_04xy4yd", // your template ID
        form.current,
        "4v-SCaStxFZNiM5ZO" // your public key
      )
      .then(
        () => {
          toast.success("✅ Thanks for contacting Abdelrahman Alaa!", {
            position: "bottom-right",
            autoClose: 4000,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-bg"></div>
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-text">
        Have an idea or feedback? Send me a message!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" required />
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>

      <ToastContainer />
    </section>
  );
}

export default Contact;
