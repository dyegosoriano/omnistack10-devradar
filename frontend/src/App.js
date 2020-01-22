import React from 'react';

import './global.css'
import './App.css'

import Sidebar from './Sidebar'
import Main from './Main'

function App() {
  return (
    <div id="app">
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;