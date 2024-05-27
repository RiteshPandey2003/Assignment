import React, { useEffect, useState } from "react";
import axios from 'axios';

const MarketList = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      setLoading(true);
      setError(null);

      try {
        const API_KEY = import.meta.env.VITE_API_KEY2;
        const url = `https://api.iex.cloud/v1/data/core/sector_performance/market?token=${API_KEY}`;

        const response = await axios.get(url);
        setApiData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
        setLoading(false);
      }
    };

    fetchApiData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!Array.isArray(apiData)) {
    return <div className="text-center text-red-500">Invalid data format</div>;
  }

  const halfLength = Math.ceil(apiData.length / 2);
  const leftSideData = apiData.slice(0, halfLength);
  const rightSideData = apiData.slice(halfLength);

  return (
    <>
      <p className="text-gray-600 px-6 py-4 font-extrabold text-xl">Sector Performance</p>
      <div className="market-list p-6 text-white text-sm flex flex-col lg:flex-row justify-between">
        <div className="market-items flex flex-col items-center justify-between lg:w-1/2">
          {leftSideData.map((item, index) => (
            <div key={index} className="market-item p-2 w-full max-w-md flex justify-between items-center">
              <span className="font-medium">{item.name}</span>
              <div className={`p-2 rounded-lg text-white ${item.performance >= 0 ? "bg-gradient-to-r from-gray-600 to-green-400" : "bg-gradient-to-r from-gray-600 to-red-400"}`}>
                <span>{item.performance}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="market-items flex flex-col items-center justify-between lg:w-1/2">
          {rightSideData.map((item, index) => (
            <div key={index} className="market-item p-2 w-full max-w-md flex justify-between items-center">
              <span className="font-medium">{item.name}</span>
              <div className={`p-2 rounded-lg text-white ${item.performance >= 0 ? "bg-gradient-to-r from-gray-600 to-green-400" : "bg-gradient-to-r from-gray-600 to-red-400"}`}>
                <span>{item.performance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MarketList;
