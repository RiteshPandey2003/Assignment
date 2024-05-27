import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Layout from "../Layout/Layout";

const LoginButton = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-6">{isAuthenticated ? `Welcome, ${user.name}` : "Please Log In"}</h1>
          {isAuthenticated ? (
            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-[280px]"
            >
              Log In 
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LoginButton;
