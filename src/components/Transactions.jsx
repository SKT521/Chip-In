import React, { useState } from 'react';

const Transactions = () => {
  const [view, setView] = useState('Pending');

  return (
    <div className="transactions">
      <h2>Transactions</h2>
      <div className="tab-buttons">
        <button onClick={() => setView('Pending')}>Pending</button>
        <button onClick={() => setView('Settled')}>Settled</button>
      </div>
      {view === 'Pending' ? (
        <div>
          <p>Dinner at Acme Restaurant - INR 250</p>
          <button>Mark as Settled</button>
          <p>Movie Tickets - INR 150</p>
          <button>Mark as Settled</button>
        </div>
      ) : (
        <div>Settled transactions list...</div>
      )}
    </div>
  );
};

export default Transactions;
