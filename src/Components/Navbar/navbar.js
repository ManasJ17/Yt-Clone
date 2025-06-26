import React from 'react';
import './navbar.css';
import menu_icon from '../../assets/menu.png';
import search_icon from '../../assets/search.png';
import profile_icon from '../../assets/id.jpg';
import tv_icon from '../../assets/tv.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ setSidebar }) {
  const navigate = useNavigate();
  return (
    <nav className='flex-div navbar-mobile'>
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => prev === false ? true : false)}
          src={menu_icon}
          alt="Menu"
          style={{ display: window.innerWidth <= 600 ? 'none' : undefined }}
        />
        <div className="logo-combo" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginLeft: '8px' }} onClick={() => navigate('/') }>
          <img src={tv_icon} alt="Playbit Logo" style={{ width: '32px', height: '32px', marginRight: '8px', verticalAlign: 'middle' }} />
          <span className="logo-text" style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#222', letterSpacing: '0.5px' }}>Playbit</span>
        </div>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="Search" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={profile_icon} className='user-icon' alt="Profile" />
      </div>
    </nav>
  );
}
