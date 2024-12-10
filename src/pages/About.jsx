
import Hero from "../components/Hero/Hero";
import FooterBanner from "../components/footerBanner/FooterBanner";
import { Container } from "@mui/material";

export default function About() {
  return (
    <>
      <Hero />
      <div className="about__wrapper">
        <Container>
          <div className="about__section">
            <section className="about__story">
              <div className="container about__story-container">
                <div className="about__section-image">
                  <img src="./logo.jpg" alt="about image" />
                </div>
                <div className="about__section-content">
                  <h1>
                    <span className="h-text">Welcome to</span> EGROGEN
                  </h1>
                  <p>
                    Welcome to Egrogen, your ultimate partner in engineering,
                    procurement, and consultancy services. We’re dedicated to
                    delivering innovative solutions tailored to your needs,
                    ensuring excellence and efficiency at every step.
                  </p>
                  <p>
                    {" "}
                    Our commitment to innovation and excellence ensures that we
                    provide tailored solutions that meet your unique challenges.
                    Delve into our comprehensive services and let us be your
                    ultimate partner in achieving success
                  </p>

                  <p>
                    Together, we can build a brighter future. above all our
                    expertise can transform your projects into success stories
                  </p>
                </div>
              </div>
            </section>

            <section className="about__vision">
              <div className="container about__vision-container">
                <div className="about__section-image">
                  <img src="/images/vision-image.jpg" alt="about image" />
                </div>
                <div className="about__section-content">
                  <h1>
                    <span className="h-text">Our</span> Vision
                  </h1>
                  <p>
                    Our vision is to be a global leader in engineering services,
                    renowned for our commitment to excellence, innovation, and
                    customer satisfaction
                  </p>

                  <p>
                    {" "}
                    Through continuous learning, adaptation, and advancement, we
                    aim to shape the future of engineering and contribute
                    positively to the progress of society
                  </p>
                </div>
              </div>
            </section>

            <section className="about__Approach">
              <div className="container about__approach-container">
                <div className="about__section-image">
                  <img src="/images/Approach.png" alt="about image" />
                </div>
                <div className="about__section-content">
                  <h1>
                    <span className="h-text">Our</span> Approach
                  </h1>
                  <p>
                    At Egrogen, we prioritize collaboration, innovation, and
                    client satisfaction. We work closely with our clients to
                    understand their unique requirements and tailor our services
                    to meet their specific needs
                  </p>

                  <p>
                    {" "}
                    By leveraging our technical expertise, industry knowledge,
                    and cutting-edge tools and technologies, we strive to
                    deliver exceptional results that drive success and foster
                    long-term partnerships
                  </p>
                </div>
              </div>
            </section>

            <section className="about__mission">
              <div className="container about__mission-container">
                <div className="about__section-image">
                  <img src="/images/mission-image.jpg" alt="about image" />
                </div>
                <div className="about__section-content">
                  <h1>
                    <span className="h-text">Our</span> Mission
                  </h1>
                  <p>
                    At Egrogen, our mission is to deliver innovative
                    engineering, procurement, and consultancy solutions that
                    empower our clients to achieve their goals with efficiency
                    and excellence.
                  </p>

                  <p>
                    {" "}
                    We are committed to fostering sustainable practices,
                    enhancing operational performance, and building lasting
                    partnerships through integrity, collaboration, and technical
                    expertise. Our aim is to transform challenges into
                    opportunities, ensuring success in every project we
                    undertake
                  </p>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>

      <FooterBanner />
    </>
  );
}
