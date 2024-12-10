

import { Link } from "react-router-dom";
import { importantFooter } from "../utilis/data";

export default function Footer() {
  return (
    <footer>
      <div className='row'>
        {
          importantFooter.map((list, index) => (
            <div className='column' key={index}>
              <h3 className='routes__name'>{list.name}</h3>
              <div className='routes__container'>
                {
                  list.name === "Connect with us" ? (
                    // Display icons instead of text for "Connect with us"
                    list.routes.map((route, i) => (
                      <a href={route.url} className='social__icon' key={i} target="_blank" rel="noopener noreferrer">
                        {route.icon}
                      </a>
                    ))
                  ) : (
                    // Regular display for other sections
                    list.routes.map((route, i) => (
                      route.id ? (
                        <Link to={route.id} className='route__item' key={i}>
                          <p className='name'>{route.name}</p>
                        </Link>
                      ) : (
                        <a href={`mailto:${route.name}`} className='route__item' key={i}>
                          <p className='name'>{route.name}</p>
                        </a>
                      )
                    ))
                  )
                }
              </div>
            </div>
          ))
        }
        <div className='column'>
          <div className='newsletter'>
            {/* Additional content can go here */}
          </div>
        </div>
      </div>

    {/** <ul className="footer-links">
        <li><Link to={"/electrical"}>Electrical</Link></li>
        <li><Link to={"/procurement"}>Procurement</Link></li>
        <li><Link to={"/renewable"}>Renewable Energy</Link></li>
        <li><Link to={"/Controls_and_Instrumentation"}>Controls and Instrumentation</Link></li>
        <li><Link to={"/Software_Development"}>Software Development</Link></li>
        <li><Link to={"/Drone_Services"}>Drone Services</Link></li>
        <li><Link to={"/Pump_Station_Services"}>Pump Station Services</Link></li>
      </ul>*/}  

      <div className="footer-copyright">
        <small>Copyright &copy;2024 <span className="copyright_egrogen">EGROGEN</span>. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
