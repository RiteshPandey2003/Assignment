import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';


const MarketSummary = () => {


  return (
    <div className='w-full h-full bg-gray-900 p-6 text-white flex flex-col justify-between rounded-lg shadow-lg sm:font-[8px]'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-lg font-bold flex items-center'>
          <FiTrendingUp className='w-6 h-6 text-green-500 mr-2' />
          Market Sentiment
        </h2>
        <div className='flex items-center bg-green-600 px-3 py-1 rounded-full'>
          <span className='text-sm'>Bullish</span>
          <FiTrendingUp className='w-6 h-6 text-white ml-2' />
        </div>
      </div>
      <div>
        <p className='text-sm font-thin mb-2'>What you need to know about</p>
        <p className='text-lg leading-relaxed'>
          The market is currently experiencing a bullish trend with increasing investor confidence. Major indices are up by 2% on average.
        </p>
      </div>
      
    </div>
  );
};

export default MarketSummary;
