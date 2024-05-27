import React from 'react';
import Header from './Header'; 

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-grow ml-0 lg:ml-20">
        {children}
      </div>
    </div>
  );
}

export default Layout;
