import React, { useState, useEffect } from 'react';
import Layout from '../Layout/Layout';
import { useAuth0 } from "@auth0/auth0-react";
import MarketSummary from './MarketSummery';
import List from "./List";
import MarketList from './MarketList';
import Graph from "./Graph";
import LayoutLoader from '../Layout/LaoyoutLoder'; 
import "./style.css";

const Dashboard = () => {
  const { user } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
          <LayoutLoader />
        </div>
      ) : (
        <>
          <p className='mt-10 text-white lg:px-20 font-bold font-mono text-xl px-2 dashboard'>
            <span>Hello, </span>{user.name}
          </p>
          <div className='lg:flex lg:justify-between lg:gap-5 lg:px-10 mt-10'>
            <div className='w-full lg:w-[40%] bg-gray-900 mb-10 lg:mb-0 '>
              <MarketSummary />
            </div>
            <div className='w-full lg:w-[60%] bg-gray-900 '>
              <List />
            </div>
          </div>
          <div className='lg:flex lg:justify-center lg:gap-5 lg:px-10 mt-10'>
            <div className='w-full lg:w-[40%] bg-gray-900 mb-10 lg:mb-0 '>
              <MarketList />
            </div>
            <div className='w-full lg:w-[60%] bg-gray-900 '>
              <Graph />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Dashboard;
