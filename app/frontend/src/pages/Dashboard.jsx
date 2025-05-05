import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4">Welcome to SchoolBuddys Dashboard!</main>
      </div>
    </div>
  );
};

export default Dashboard;
