

import './SoftDevPage.css'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container } from "@mui/material";
import { Link } from "react-router-dom"; 

function SoftDevPage() {
  return (
    <Container>
         <div className="softDevPage__container">
         <div className="softDevPage__content">
         <h2> Software Development Services</h2>
          <p>
          From concept to deployment, and beyond, we offer a complete suite of software development 
          services designed to empower your business. Whether you need a cutting-edge web application, 
          a mobile-first strategy, or expert guidance on your technology roadmap, we provide the expertise 
          and support you need to succeed.
          </p>

         </div>
         <div className="softDevPage__items">
         <Tabs>
            <TabList>
              <Tab>Web Application Development</Tab>
              <Tab>Mobile App Development </Tab>
              <Tab>IT & Software Dev consultation </Tab>
              
            </TabList>

            <TabPanel>
              <div className="tabPanel__wrapper">
                <div className="tabPanel__content">
                  <h3 className="title g-text">Web Application Development</h3>
                  <p className="paragraph">
                  We build robust, scalable, and user-friendly web applications tailored to meet your specific needs. 
                  Stop settling for off-the-shelf solutions that don't quite fit. Let us create a web application 
                  that seamlessly integrates with your workflow and drives your business forward.
                  </p>
                  <h4 className="heading">Services</h4>
                  <ul className="list-services">
                    <li>- Custom Web Application Development</li>
                    <li>- Web API Integration</li>
                    <li>- UI/UX Design</li>
                    <li>- Maintenance & Support</li>
                    
                  </ul>
                  <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to="/contact" className="btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="tabPanel__content-image">
                  <img src="./webapp-2.jpg" alt="image" />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabPanel__wrapper">
              <div className="tabPanel__content-image">
                  <img src="./webapp-3.jpg" alt="image" />
                </div>
                <div className="tabPanel__content">
                  <h3 className="title g-text">Mobile App Development </h3>
                  <p className="paragraph">
                  We build high-quality, engaging mobile apps for iOS and Android, designed to streamline your operations, 
                  enhance your brand, and drive significant growth. Whether you need a simple utility app or a complex, 
                  feature-rich solution, we've got you covered.
                 
                  </p>
                  <h4 className="heading">Services</h4>
                  <ul className="list-services">
                    <li>- Native App Development</li>
                    <li>- UI/UX Design</li>
                    <li>- Backend Development</li>
                    <li>- Testing and Deployment</li>
                    
                  </ul>
                  <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to="/contact" className="btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabPanel__wrapper">
                <div className="tabPanel__content">
                  <h3 className="title g-text">IT & Software Dev consultation</h3>
                  <p className="paragraph">
                  Navigating the complex world of IT and software development can be challenging. We provide expert consultation 
                  to help businesses of all sizes make informed decisions, optimize their technology investments, 
                  and achieve their strategic goals. Our experienced consultants offer practical guidance and actionable 
                  strategies to ensure your technology aligns perfectly with your business objectives.
                  </p>
                  <h4 className="heading">Services</h4>
                  <ul className="list-services">
                    <li>- Software Selection & Implementation</li>
                    <li>- Technology Strategy & Planning</li>
                    <li>- IT Security Assessment & Planning</li>
                    <li>- Project management and risk mitigation</li>
                    
                  </ul>
                  <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to="/contact" className="btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="tabPanel__content-image">
                  <img src="./webapp-4.jpg" alt="image" />
                </div>
              </div>
            </TabPanel>

            
          </Tabs>
         </div>
         </div>

    </Container>
  )
}

export default SoftDevPage
