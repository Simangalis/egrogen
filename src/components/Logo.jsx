

import { Link,} from 'react-router-dom';

export default function Logo() {
  return (
    <div className='logo'>
      <Link to="/" className="logo-link"></Link>
      <img src="/logo.jpg" width={60} height={60} alt="Logo" className='logo-image'/>
      <div className='text-container'>
        <h3 className='name'>EGROGEN</h3>
        <p>New Thinking. New Efficiency</p>
      </div>
    </div>
  )
}
