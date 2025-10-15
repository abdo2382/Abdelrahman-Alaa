// npm install @emailjs/browser react-toastify
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);

  const SERVICE_ID = "service_d6scdba";
  const TEMPLATE_TO_ME = "template_to_me"; // your template that sends to you
  const TEMPLATE_TO_USER = "template_to_user"; // auto-reply template
  const PUBLIC_KEY = "4v-SCaStxFZNiM5ZO";

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // send the message to YOU (using the form so template variables are populated)
      const res1 = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_TO_ME,
        form.current,
        PUBLIC_KEY
      );
      console.log("EmailJS -> sent to me:", res1);

      // build params for user auto-reply
      const formData = new FormData(form.current);
      const userName = formData.get("user_name");
      const userEmail = formData.get("user_email");
      const message = formData.get("message");

      // send auto-reply to the user
      const replyParams = {
        user_name: userName,
        user_email: userEmail,
        message, // if you want to include original message in reply
      };

      const res2 = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_TO_USER,
        replyParams,
        PUBLIC_KEY
      );
      console.log("EmailJS -> auto-reply sent:", res2);

      toast.success(`✅ Thanks ${userName} — message sent!`, {
        position: "bottom-right",
        autoClose: 4000,
      });
      form.current.reset();
    } catch (err) {
      // detailed logging
      console.error("EmailJS error (detailed):", err);

      // show friendly message + give a hint
      toast.error("❌ Something went wrong. Check console for details.", {
        position: "bottom-right",
      });

      /* Helpful debug hints:
         - if err.status === 0 or network error => CORS or network blocked
         - if err.status === 400/401 => service/template/public key mismatch
         - if err.status === 429 => rate-limited (too many requests)
       */
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-bg" />
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
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />
        </div>
        <button type="submit" className="btn-submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>

      <ToastContainer />
    </section>
  );
}

export default Contact;
