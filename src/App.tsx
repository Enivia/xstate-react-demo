import React from 'react';
import Toggle from './components/toggle';
import Counter from './components/counter';

import './App.css';

function App() {
  return (
    <div className='App'>
      <h2>1. toggle</h2>
      <Toggle />
      <h2>2. counter</h2>
      <Counter />
    </div>
  );
}

export default App;
