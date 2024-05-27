import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUser, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="bg-gray-800 text-white fixed top-0 lg:top-auto lg:left-0 lg:bottom-0 w-full lg:w-20 lg:h-screen flex lg:flex-col justify-center items-center py-4 z-50">
      <div className="flex lg:flex-col items-center w-full lg:w-auto justify-center">
        <Link to="/" className="mb-4 flex flex-col items-center justify-center w-full lg:w-auto bg-transparent py-1 px-3 rounded-lg text-sm text-gray-300 hover:text-white lg:py-2 lg:border-none">
          <FontAwesomeIcon icon={faHome} />
          <span className="text-xs lg:hidden">Home</span>
        </Link>
        <Link to="/profile" className="mb-4 flex flex-col items-center justify-center w-full lg:w-auto bg-transparent py-1 px-3 rounded-lg text-sm text-gray-300 hover:text-white lg:py-2 lg:border-none">
          <FontAwesomeIcon icon={faUser} />
          <span className="text-xs lg:hidden">Profile</span>
        </Link>
        <Link to="/search" className="mb-4 flex flex-col items-center justify-center w-full lg:w-auto bg-transparent py-1 px-3 rounded-lg text-sm text-gray-300 hover:text-white lg:py-2 lg:border-none">
          <FontAwesomeIcon icon={faSearch} />
          <span className="text-xs lg:hidden">Search</span>
        </Link>
        <div className="mb-4 w-full lg:w-auto flex flex-col items-center justify-center">
        {user && (
          <button onClick={() => logout({ returnTo: window.location.origin })} className="flex flex-col items-center justify-center w-full lg:w-auto bg-transparent py-1 px-3 rounded-lg text-sm text-gray-300 hover:text-white lg:py-2 lg:border-none">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="text-xs lg:hidden">Logout</span>
          </button>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default Header;
