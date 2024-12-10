
import { useRef, useState } from "react";
import "./Contact.css";
import { contacts } from "../../utilis/data";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

//6Le5JpQqAAAAAOYCQTlXgtM0IuZawjLd2ODD5o5r

export default function Contact() {
  const [capVal, setCapVal] = useState(null);

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
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="bg__image"></div>
      <div className="overlay"></div>
      <div className="container">
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
            <h3 className="sub__title g-text">Let's Keep In Touch</h3>
            <p>Need a Service? Reach Out to Us by Filling Out the Form</p>
          </div>

          {/* Updated: Using a proper <form> element */}
          <form ref={form} onSubmit={sendEmail} className="form__middle">
            <div className="row">
              <div className="column">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                  className="control"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="user_email"
                  className="control"
                  required
                />
              </div>
              <div className="column">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  className="control"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phonenumber"
                  className="control"
                  required
                />
              </div>
            </div>
            <textarea
              name="message"
              cols={40}
              rows={5}
              placeholder="Type your message here"
              className="control"
              required
            ></textarea>
            <ReCAPTCHA
              sitekey="6Le5JpQqAAAAAOYCQTlXgtM0IuZawjLd2ODD5o5r"
              onChange={(val) => setCapVal(val)}
            />
            <div className="form__bottom">
              <button
                disabled={!capVal}
                type="submit"
                className="btn btn__primary"
              >
                Send Message
              </button>
            </div>
          </form>
          {successMessage && (
            <p className="success__message">{successMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}
