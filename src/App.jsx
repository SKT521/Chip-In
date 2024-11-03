import React from 'react';
import Dashboard from './components/Dashboard';
import SplitBill from './components/SplitBill';
import Transactions from './components/Transactions';
import Recommendations from './components/Recommendations';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Dashboard />
        <SplitBill />
        <Transactions />
        <Recommendations />
      </div>
    </div>
  );
}

export default App;
