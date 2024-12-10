

import "./About.css"
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="column company__photo">
          <img src="/images/solar1.jpg" alt="Solar Panel" />
        </div>

        <div className="column">
          <h1 className="title">
            EGROGEN - Your ultimate partner in{" "}
            <span className="h-text">engineering, procurement,</span> and{" "}
            <span className="h-text">consultancy</span> services
          </h1>
          <p className="description">
            Welcome to Egrogen, your ultimate partner in engineering,
            procurement, and consultancy services. We’re dedicated to delivering
            innovative solutions tailored to your needs, ensuring excellence and
            efficiency at every step. Our commitment to innovation and
            excellence ensures that we provide tailored solutions that meet your
            unique challenges
          </p>
          <div className="group">
            {/* Start row*/}
            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>
            {/* Start row*/}

            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Expert</p>
                <h3>Engineers</h3>
              </div>
            </div>

            {/* Start row*/}

            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">Excellent Customer</p>
                <h3>Support</h3>
              </div>
            </div>
            {/* Start row*/}

            <div className="row">
              <div className="icon__container">
                <FaCheck />
              </div>
              <div className="details">
                <p className="text__muted">High Quality</p>
                <h3>Services</h3>
              </div>
            </div>
            {/* Start row*/}
          </div>{" "}
          {/* End group*/}
          <div className="buttons__container">
            <Link to="/about" smooth={true} className="btn">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
