

import "./Achievement.css";
import { GrCompliance, GrUserExpert, GrServices } from "react-icons/gr"; // Added GrServices import
import { MdBookmarkAdded } from "react-icons/md";

export default function Achievement() {
  return (
    <div className='achievement__container'>
      <div className='container'>
        {/* Start achievement */}
        <div className='achievement'>
          <div className='icon__container'><GrServices /></div>
          <div className='details'>
            <small className='text__muted'>100% Customer Satisfaction</small> {/* Updated text */}
          </div>
        </div>
        {/* End achievement */}

        <div className='achievement'>
          <div className='icon__container'><GrCompliance /></div>
          <div className='details'>
            <small className='text__muted'>Trustworthy Partners</small>
          </div>
        </div>

        <div className='achievement'>
          <div className='icon__container'><GrUserExpert /></div>
          <div className='details'>
            <small className='text__muted'>Expert Workers</small>
          </div>
        </div>

        <div className='achievement'>
        <div className='icon__container'><MdBookmarkAdded /></div>
          <div className='details'>
            <small className='text__muted'>Unmatched Quality Services</small>
          </div>
        </div>
      </div>
    </div>
  );
}
