

import "./PumpStationPage.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

import { Container } from "@mui/material";

function PumpStationPage() {
  return (
    <Container>
      <div className="pumpStationPage__container">
        <div className="pumpStationPage__content">
          <h2> Pump Station Services</h2>
          <p>
            We represent a number of leading manufacturers of various kinds of
            laboratory, industrial, filtration, bioprocess and water testing
            equipment, reagents, consumables and chemicals and therefore we are
            able to supply a variety of quality products
          </p>
        </div>
        <div className="pumpStationPage__items">
          <Tabs>
            <TabList>
              <Tab>Design and Engineering Services</Tab>
              <Tab>Installation Services</Tab>
              <Tab>Maintenance Services</Tab>
              
            </TabList>

            <TabPanel>
              <div className="tabPanel__wrapper">
                <div className="tabPanel__content">
                  <h3 className="title g-text">Design and Engineering Services</h3>
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
                  <h3 className="title g-text">Installation Services</h3>
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
                  <h3 className="title g-text">Maintenance Services</h3>
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
  );
}

export default PumpStationPage;
