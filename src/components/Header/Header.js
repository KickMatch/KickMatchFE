import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import banner from '../../assets/banner.png';
import './Header.css';

const Header = () => {

  const {id} = useParams()

  return (
    <header className='header'>
      {/* <div className='image-div'>
        <Link to={`/`}> <img className='header-logo' src={banner} alt='logo' /> </Link>
      </div> */}
      <img className='header-logo' src={banner} alt='logo' />
      <div className='links-div'>
        <span className='hover-span'><NavLink style={{ textDecoration: 'none' }}activeClassName='header-active' exact to={`/athlete/${id}`}> <p className='header-text'>Profile</p> </NavLink></span>
        <span className='hover-span'><NavLink style={{ textDecoration: 'none' }}activeClassName='header-active' exact to={`/athlete/${id}/search`}> <p className='header-text'>Search</p> </NavLink></span>
        <span className='hover-span'><NavLink style={{ textDecoration: 'none' }}activeClassName='header-active' exact to={`/athlete/${id}/interested-teams`}> <p className='header-text'>Interested Parties</p> </NavLink></span>
        <span className='hover-span'><NavLink style={{ textDecoration: 'none' }}activeClassName='header-active' exact to='/'> <p className='header-text'>Log Out</p></NavLink></span>
      </div>
    </header>
  );
};

export default Header;