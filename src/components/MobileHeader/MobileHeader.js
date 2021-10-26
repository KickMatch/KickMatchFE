import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MobileHeader.css'

const MobileHeader = () => { //MobileHeader component
  const [hamburgerOpen, setHamburgerOpen] = useState(true)

  const {id} = useParams()

  const handleToggle = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return(
    <header className='hamburger'>
      <div onClick={handleToggle} className='hamburger-header'>
        <div className='burger burger1' />
        <div className='burger burger2' />
        <div className='burger burger3' />
      </div>
      <div className={`navigation ${hamburgerOpen ? 'close' : ''}`}>
        <ul className='mobile-ul' style={{'color':'white'}}>
          <li><Link className='mobile-links' style={{ textDecoration: 'none' }} exact to={`/athlete/${id}`}>Profile</Link></li>
          <li><Link className='mobile-links' style={{ textDecoration: 'none' }} exact to={`/athlete/${id}/search`}>Search</Link></li>
          <li><Link className='mobile-links' style={{ textDecoration: 'none' }} exact to={`/athlete/${id}/interested-teams`}>Matches</Link></li>
          <li><Link className='mobile-links' style={{ textDecoration: 'none' }} exact to={`/`}>Log Out</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default MobileHeader;