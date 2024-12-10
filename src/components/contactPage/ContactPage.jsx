
import { useRef, useState } from "react";
import "./ContactPage.css";
import { contacts } from "../../utilis/data";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o4zoqjk",
        "template_5v7aujr",
        form.current,
        "GHqsNL6dfQjoBaXCL"
      )
      .then(
        () => {
          setSuccessMessage(
            "Thank you for submitting; our experienced sales staff will contact you shortly."
          );
          e.target.reset(); // Reset the form
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      <div className="contactPage__container">
        <div className="column">
          {contacts.map((contact, index) => (
            <div className="contact__info" key={index}>
              <div className="icon__container">{contact.icon}</div>
              <div className="details">
                <p className="text__muted">{contact.name}</p>
                <h3 className="value">{contact.value}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="column form__container">
          <div className="form__top">
            <h3 className="sub__title g-text">Keep In Touch</h3>
            <p>Need a Service? Reach Out to Us by Filling Out the Form</p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="form__middle">
            <div className="row">
              <input
                type="text"
                placeholder="First Name"
                name="user_name"
                className="control"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="name"
                className="control"
                required
              />
            </div>
            <div className="row">
              <input
                type="email"
                placeholder="Email Address"
                name="user_email"
                className="control"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                className="control"
                required
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Message"
              className="control"
              required
            ></textarea>
            <div className="form__button">
              <button type="submit" className="btn btn__primary">
                Send Message
              </button>
            </div>
          </form>
          {successMessage && (
            <p className="success__message">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
