import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const API_KEY = import.meta.env.VITE_API_KEY1; // Replace with your actual API key

const Graph = () => {
  const [symbol, setSymbol] = useState('AAPL');
  const [range, setRange] = useState('1month');
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (symbol) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response)
      if (!response.data || !response.data['Time Series (Daily)']) {
        throw new Error('Unexpected data format');
      }

      const timeSeries = response.data['Time Series (Daily)'];
      const labels = Object.keys(timeSeries);
      const closeData = labels.map(date => parseFloat(timeSeries[date]['4. close']));

      const filteredData = filterDataByRange(labels.reverse(), closeData.reverse(), range);

      const datasets = [
        {
          label: `${symbol} Close Prices`,
          data: filteredData.closeData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        },
      ];

      setChartData({ labels: filteredData.labels, datasets });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.toString());
      setLoading(false);
    }
  };

  const filterDataByRange = (labels, data, range) => {
    let filteredLabels = [];
    let filteredData = [];

    switch (range) {
      case '1day':
        filteredLabels = labels.slice(-1);
        filteredData = data.slice(-1);
        break;
      case '1week':
        filteredLabels = labels.slice(-7);
        filteredData = data.slice(-7);
        break;
      case '1month':
        filteredLabels = labels.slice(-30);
        filteredData = data.slice(-30);
        break;
      case '1year':
        filteredLabels = labels.slice(-365);
        filteredData = data.slice(-365);
        break;
      default:
        filteredLabels = labels;
        filteredData = data;
    }

    return { labels: filteredLabels, closeData: filteredData };
  };

  useEffect(() => {
    fetchData(symbol);
  }, [symbol, range]);

  const handleSymbolChange = (newSymbol) => {
    setSymbol(newSymbol);
  };

  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="market-chart p-6 text-black text-sm max-w-full overflow-hidden ">
      <div className="text-right mb-4 flex justify-end">
        <button onClick={() => handleSymbolChange('AAPL')} className="symbol-button mr-2 bg-gray-600 text-white p-1 text-xs">AAPL</button>
        <button onClick={() => handleSymbolChange('MSFT')} className="symbol-button mr-2 bg-gray-600 text-white p-1 text-xs">MSFT</button>
        <button onClick={() => handleSymbolChange('IBM')} className="symbol-button mr-2 bg-gray-600 text-white p-1 text-xs">IBM</button>
      </div>
      <div className="text-right mb-4 flex justify-end">
        <button onClick={() => handleRangeChange('1day')} className="range-button mr-2 bg-gray-600 text-white p-2 rounded-full text-xs">D</button>
        <button onClick={() => handleRangeChange('1week')} className="range-button mr-2 bg-gray-600 text-white p-2 rounded-full text-xs">W</button>
        <button onClick={() => handleRangeChange('1month')} className="range-button mr-2 bg-gray-600 text-white p-2 rounded-full text-xs">M</button>
        <button onClick={() => handleRangeChange('1year')} className="range-button mr-2 bg-gray-600 text-white p-2 rounded-full text-xs">Y</button>
      </div>
      <Line data={chartData} />
    </div>
  );
};

export default Graph;
