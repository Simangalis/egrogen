
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Services.css';
import { projects } from '../../utilis/data-services';
import ServicesNavigation from './ServicesNavigation/ServicesNavigation';
import {Container } from "@mui/material";

export default function Services() {
    const [activeProjects, setActiveProjects] = useState(projects);

    // Generate the tabs dynamically based on the project categories
    const getTabs = () => {
        const tabs = ["All"];
        projects.forEach((item) => {
            if (!tabs.includes(item.category)) {
                tabs.push(item.category);
            }
        });
        return tabs;
    }

    // Filter projects based on the selected tab
    const setProjects = (value) => {
        if (value === "All") {
            return setActiveProjects(projects);
        }
        const filteredProjects = projects.filter((item) => item.category === value);
        setActiveProjects(filteredProjects);
    }

    return (
        <section id='services'>
            <Container>
            
                <h1 className='title'>Our <span className='g-text'>Services</span> </h1>
                <ServicesNavigation
                    tabs={getTabs().filter(tab => tab !== "All")} // Hide "All" tab
                    onChange={setProjects}
                />
                <div className='services__container'>
                    {activeProjects.map((project, index) => (
                        <div className='project__card' key={index}>
                            <div className='image__container'>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <h3 className='name'>{project.title}</h3>
                            <p className='text__muted description'>{project.category}</p>
                            <ul>
                                {project.service.map((serviceItem, serviceIndex) => (
                                    <li key={serviceIndex}>{serviceItem}</li>
                                ))}
                            </ul>
                            <div className='buttons'>
                                {/* Link to the corresponding category page */}
                                <Link to={`/${project.category}`} className='btn'>
                                    Read more
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            
            </Container>
        </section>
    );
}
