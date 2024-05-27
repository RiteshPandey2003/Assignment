import React, { useEffect, useState } from "react";
import axios from "axios";

const MarketList = () => {
  const [apidata, setApidata] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY1;
  const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setApidata(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.toString());
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!apidata || !apidata.top_gainers || !apidata.top_losers || !apidata.most_actively_traded) {
    return <div className="text-red-500 text-center">Data is not in expected format</div>;
  }

  const topGainers = apidata.top_gainers.slice(0, 10);
  const topLosers = apidata.top_losers.slice(0, 10);
  const mostActivelyTraded = apidata.most_actively_traded.slice(0, 10);

  const getBackgroundColor = (amount) => {
    return parseFloat(amount) >= 0 ? 'bg-green-500' : 'bg-red-500';
  };

  const getTextColor = (percentage) => {
    return parseFloat(percentage) >= 0 ? 'text-green-500' : 'text-red-500';
  };

  return (
    <div className="market-list p-6 text-white text-sm">
      <h2 className="text-2xl font-semibold mb-4 flex-start p-4 text-gray-700">Markets</h2>
      <div className="market-items flex flex-col items-center overflow-y-auto max-h-[400px]">
      {mostActivelyTraded.map((item, index) => (
          <div key={index} className="market-item p-2 w-full max-w-md flex justify-between">
            <span className="font-medium">{item.ticker}</span>
            <span>{item.volume}</span>
            <span className={getTextColor(item.change_percentage)}>{item.change_percentage}%</span>
            <span className={`w-14 text-right p-1 ${getBackgroundColor(item.change_amount)}`}>{item.change_amount}</span>
          </div>
        ))}
        {topGainers.map((item, index) => (
          <div key={index} className="market-item p-2 w-full max-w-md flex justify-between">
            <span className="font-medium">{item.ticker}</span>
            <span>{item.volume}</span>
            <span className={getTextColor(item.change_percentage)}>{item.change_percentage}%</span>
            <span className={`w-14 text-right p-1 ${getBackgroundColor(item.change_amount)}`}>{item.change_amount}</span>
          </div>
        ))}
        
        {topLosers.map((item, index) => (
          <div key={index} className="market-item p-2 w-full max-w-md flex justify-between">
            <span className="font-medium">{item.ticker}</span>
            <span>{item.volume}</span>
            <span className={getTextColor(item.change_percentage)}>{item.change_percentage}%</span>
            <span className={`w-14 text-right p-1 ${getBackgroundColor(item.change_amount)}`}>{item.change_amount}</span>
          </div>
        ))}
        
        
        
      </div>
    </div>
  );
};

export default MarketList;
