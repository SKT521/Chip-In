import React from 'react';

const Dashboard = () => (
  <div className="dashboard">
    <h2>Dashboard</h2>
    <div>
      <p>Total Expenses</p>
      <h3>INR 12346</h3>
      <button>View</button>
    </div>
    <div>
      <p>Pending Transactions</p>
      <h3>INR 4568</h3>
      <button>View</button>
    </div>
    <div>
      <p>Settled Transactions</p>
      <h3>INR 7891</h3>
      <button>View</button>
    </div>
  </div>
);

export default Dashboard;
