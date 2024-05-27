import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './conponent/Login';
import LayoutLoader from './Layout/LaoyoutLoder';


const Dashboard = lazy(() => import('./conponent/Dashboard'));
const Profile = lazy(() => import('./conponent/Profile'));
const Search = lazy(() => import('./conponent/Search'));

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <div className='bg-gray-700 h-fit flex min-h-screen'>
        <div className='flex-1'>
          {isAuthenticated ? (
            <Suspense fallback={<LayoutLoader />}> {/* Use Loader as the fallback component */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </Suspense>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
