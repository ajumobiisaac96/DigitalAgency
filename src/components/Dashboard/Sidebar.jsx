import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('user-stat');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Hide sidebar on section click
  };

  const handleLogout = () => {
    navigate('/signup');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='side-bar'>
      <div className={`sidebar-info ${isOpen ? 'open' : ''}`}>
        <h3
          className={activeSection === 'user-stat' ? 'active' : ''}
          onClick={() => handleSectionClick('user-stat')}
        >
          User Statistics
        </h3>
        <h3
          className={activeSection === 'engagement-score' ? 'active' : ''}
          onClick={() => handleSectionClick('engagement-score')}
        >
          Engagement score
        </h3>
        <h3
          className={activeSection === 'revenue-gen' ? 'active' : ''}
          onClick={() => handleSectionClick('revenue-gen')}
        >
          Revenue Generated
        </h3>
        <h3
          className={activeSection === 'profile' ? 'active' : ''}
          onClick={() => handleSectionClick('profile')}
        >
          Profile
        </h3>
        <h3 className="logout" onClick={handleLogout}>
          Log Out
        </h3>
      </div>
      <div className="dashboard-internal-info">
        {!isOpen && (
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {activeSection === 'user-stat' && (
          <div className="user-stat">
            <h1>User Statistics</h1>
            <p>Number of posts</p>
            <p>Number of posts</p>
          </div>
        )}
        {activeSection === 'engagement-score' && (
          <div className="engagement-score">
            <h1>Engagement Score</h1>
            <p>Number of likes</p>
            <p>Number of comments</p>
          </div>
        )}
        {activeSection === 'revenue-gen' && (
          <div className="revenue-gen">
            <h1>Revenue Generated</h1>
            <p>Amount of money made</p>
          </div>
        )}
        {activeSection === 'profile' && (
          <div className="profile">
            <h1>Profile</h1>
            <p>User profile information</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
