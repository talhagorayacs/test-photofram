import React, { useState } from 'react';
import './App.css';

// Importing Font Awesome components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [username, setUsername] = useState('JohnDoe');
  const [search, setSearch] = useState('');

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logged out');
  };

  return (
  
      <nav className="flex items-center bg-[#FAF9F6] justify-between p-4 bg-white shadow-md text-gray-800"
      
      >
        {/* Left - Username */}
        <div className="flex items-center space-x-4">
          <span className="text-xl font-semibold">{username}</span>
        </div>

        {/* Center - Search Bar */}
        <div className="w-1/3">
          <input
            className="w-full rounded-full border border-gray-300 px-6 py-2 text-gray-700 placeholder-gray-500 shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Right - Icons & Profile */}
        <div className="flex items-center space-x-6">
          {/* Home Icon */}
          <button className="text-2xl transition-colors duration-200 hover:text-blue-500">
            <FontAwesomeIcon icon={faHome} />
          </button>

          {/* Logout Icon */}
          <button
            className="text-2xl transition-colors duration-200 hover:text-red-500"
            onClick={handleLogout}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>

          {/* Profile Picture */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-gray-300 shadow-sm"
            />
          </div>
        </div>
      </nav>
  );
}




export default Navbar;
