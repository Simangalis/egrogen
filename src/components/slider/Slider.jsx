import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { sliderData } from '../../utilis/data';
import { useNavigate } from 'react-router-dom'; // Use react-router-dom's useNavigate
import "./Slider.css";

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false); // Track if slider is hovered
    const navigate = useNavigate(); // Initialize navigate

    // Automatically move to the next slide every 5 seconds
    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
            }, 5000); // 5000ms = 5 seconds

            return () => clearInterval(interval); // Cleanup on component unmount
        }
    }, [isHovered]); // Re-run effect when hover state changes

    // Function to handle the next slide manually
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    };

    // Function to handle the previous slide manually
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
    };

    const handleFindOutMore = (page) => {
        navigate(page); // Use navigate from React Router to change the route
    };

    return (
        <div 
            className='slider' 
            onMouseEnter={() => setIsHovered(true)} // Pause on hover
            onMouseLeave={() => setIsHovered(false)} // Resume on leave
        >
            <FaAngleLeft className='arrow prev' onClick={prevSlide} /> {/* Add onClick */}
            <FaAngleRight className='arrow next' onClick={nextSlide} /> {/* Add onClick */}

            {sliderData.map((slide, index) => (
                <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                    {index === currentSlide && (
                        <div>
                            <img src={slide.image} alt='slide' />
                            <div className='content'>
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <hr />
                                <button 
                                    className='btn --btn-primary'
                                    onClick={() => handleFindOutMore(slide.link)}  // Use the link from the data
                                >
                                    Find out more
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
