import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Layout from "../Layout/Layout"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>Loading ...</div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
      {isAuthenticated && (
      <div className="">
        <div className="bg-gray-600 rounded-lg shadow-lg p-8 max-w-sm w-full">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-full w-32 h-32 mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-center mb-2 text-white">
            {user.name}
          </h2>
          <p className="text-gray-100 text-center">{user.email}</p>
        </div>
      </div>
      )};
      </div>
    </Layout>
  );
};

export default Profile;
