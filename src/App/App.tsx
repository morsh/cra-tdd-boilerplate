import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from '../AppRouter/AppRouter';

function App() {
  return (
    <Router>
      <div className='App' data-hook='root-app'>
        <div>
          Hello World 1
        </div>
        <span>some text</span>
      </div>
      <AppRouter />
    </Router>
  );
}

export default App;
