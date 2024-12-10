

import './ServiceSection.css'
import {Container } from "@mui/material";
import { Link } from 'react-router-dom'; 

function ServiceSection() {
  return (

   <section id='serviceSection'>
    <Container>
    <h1 className='title' style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
    Our <span className='g-text'>Services</span>
</h1>
    <div className='serviceLinks-container'>
        <ul className='serviceLinks'>
        <li><Link to={"/electrical"}>Electrical</Link></li>
        <li><Link to={"/Pump_Station_Services"}>Pump Station Services</Link></li>
        <li><Link to={"/Controls_and_Instrumentation"}>Controls and Instrumentation</Link></li>
        <li><Link to={"/renewable"}>Renewable Energy</Link></li>
        <li><Link to={"/Software_Development"}>Software Development</Link></li>
        <li><Link to={"/procurement"}>Procurement</Link></li>
        <li><Link to={"/Drone_Services"}>Drone Services</Link></li>
        <li><Link to={"/Project_Management"}>Project Management</Link></li>
        
        </ul>
    </div>

    </Container>

   </section>

  )
}

export default ServiceSection
