

import { Container } from "@mui/material";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import './ControlIntrumentationPage.css'

function ControlIntrumentationPage() {
  return (
    <Container>
        <div className="controlIntrumentationPage__container">
        <div className="controlIntrumentationPage__content">
        <h2> Control and Instrumentation Services</h2>
        <p>
            We represent a number of leading manufacturers of various kinds of
            laboratory, industrial, filtration, bioprocess and water testing
            equipment, reagents, consumables and chemicals and therefore we are
            able to supply a variety of quality products
          </p>
        </div>
        <div className="controlIntrumentationPage__items">
        <Tabs>
        <TabList>
              <Tab>Instrumentation Services</Tab>
              <Tab>Control System Design</Tab>
              <Tab>Maintenance and Support Services</Tab>
              
            </TabList>

            <TabPanel>
              <div className="tabPanel__wrapper">
                <div className="tabPanel__content">
                  <h3 className="title g-text">Instrumentation Services</h3>
                  <p className="paragraph">
                    We represent a number of leading manufacturers of various
                    kinds of laboratory, industrial, filtration, bioprocess and
                    water testing equipment, reagents. We represent a number of
                    leading manufacturers of various kinds of laboratory,
                    industrial, filtration, bioprocess and water testing
                    equipment, reagents. We represent a number of leading
                    manufacturers of various kinds of laboratory
                  </p>
                  <h4 className="heading">Services</h4>
                  <ul className="list-services">
                    <li>- Pump Station Design and Layout</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                  </ul>
                  <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to="/contact" className="btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="tabPanel__content-image">
                  <img src="./electric-3.png" alt="electric-image" />
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabPanel__wrapper">
              <div className="tabPanel__content-image">
                  <img src="./electric-3.png" alt="electric-image" />
                </div>
                <div className="tabPanel__content">
                  <h3 className="title g-text">Control System Design</h3>
                  <p className="paragraph">
                    We represent a number of leading manufacturers of various
                    kinds of laboratory, industrial, filtration, bioprocess and
                    water testing equipment, reagents. We represent a number of
                    leading manufacturers of various kinds of laboratory,
                    industrial, filtration, bioprocess and water testing
                    equipment, reagents. We represent a number of leading
                    manufacturers of various kinds of laboratory
                  </p>
                  <h4 className="heading">Services</h4>
                  <ul className="list-services">
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
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
                  <h3 className="title g-text">Maintenance and Support Services</h3>
                  <p className="paragraph">
                    We represent a number of leading manufacturers of various
                    kinds of laboratory, industrial, filtration, bioprocess and
                    water testing equipment, reagents. We represent a number of
                    leading manufacturers of various kinds of laboratory,
                    industrial, filtration, bioprocess and water testing
                    equipment, reagents. We represent a number of leading
                    manufacturers of various kinds of laboratory
                  </p>
                  <h4 className="heading">Services</h4>
                  <ul className="list-services">
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                    <li>- Wiring Installation</li>
                    <li>- Electrical Panel Installation</li>
                    <li>- Electrical Appliance Installation</li>
                  </ul>
                  <div className="buttons">
                    {/* Link to the corresponding category page */}
                    <Link to="/contact" className="btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="tabPanel__content-image">
                  <img src="./electric-3.png" alt="electric-image" />
                </div>
              </div>
            </TabPanel>

        </Tabs>

        </div>
        </div>

    </Container>
  )
}

export default ControlIntrumentationPage
