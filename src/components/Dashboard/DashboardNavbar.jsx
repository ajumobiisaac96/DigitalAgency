import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = ({ username }) => {
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    padding: '10px 20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  };

  const logoStyle = {
    fontSize: '24px',
    textDecoration: 'none',
    color: 'black',
  };

  const welcomeMessageStyle = {
    fontSize: '18px',
  };

  const mobileNavbarStyle = {
    ...navbarStyle,
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <nav style={isMobile ? mobileNavbarStyle : navbarStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo">
            <Link to="/" style={logoStyle}>
              <h1>MonetizeHub</h1>
            </Link>
          </div>
          <div className="welcome-message" style={welcomeMessageStyle}>
            <h2>Welcome, {username}</h2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
