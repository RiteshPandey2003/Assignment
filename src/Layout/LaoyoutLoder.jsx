// LayoutLoader.js
import React, { useEffect } from 'react';
import './layoutLoder.css'; 

const LayoutLoader = () => {
  


  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex space-x-2">
        <div className="dot animate-bounce1"></div>
        <div className="dot animate-bounce2"></div>
        <div className="dot animate-bounce3"></div>
        <div className="dot animate-bounce4"></div>
      </div>
    </div>
  );
}

export default LayoutLoader;
