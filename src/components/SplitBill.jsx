import React from 'react';

const SplitBill = () => (
  <div className="split-bill">
    <h2>Split Bill</h2>
    <input type="file" />
    <select>
      <option>Select friends</option>
      {/* Populate options here */}
    </select>
    <button>Split Bill</button>
  </div>
);

export default SplitBill;
