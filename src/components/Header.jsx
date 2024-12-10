
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';

// Import icons
import { HiMiniBars3BottomRight } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024);
  const location = useLocation(); // Get the current route location
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsNavShow(true);
    } else {
      setIsNavShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link when the route changes
  }, [location]);

  return (
    <nav>
       <div className="container nav-container">
        {/* Wrap the Logo component with Link to make it clickable */}
        <Link to="/" className="logo-link">
          <Logo />
        </Link>
        <ul className={`nav-menu ${isNavShow ? 'show' : 'hide'}`}>
          <li>
            <Link
              to="/"
              className={activeLink === '/' ? 'active-link' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === '/about' ? 'active-link' : ''}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === '/services' ? 'active-link' : ''}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={activeLink === '/projects' ? 'active-link' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className={activeLink === '/careers' ? 'active-link' : ''}
            >
              Careers
            </Link>
          </li>
          <Link
             to="/contact"
             className={`btn contact__btn ${
               activeLink === '/contact' ? 'no-underline' : ''
             }`}
           >
             Contact Us
          </Link>
        </ul>

        <button
          className="nav-toggle-button btn"
          onClick={() => setIsNavShow(!isNavShow)}
        >
          {isNavShow ? <AiOutlineClose /> : <HiMiniBars3BottomRight />}
        </button>
      </div>
    </nav>
  );
}
