import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from '../AppRouter/AppRouter';

function App() {
  return (
    <div className='App' data-hook='root-app'>
      <Router>
        <div>
          Hello World 1
        </div>
        <span>some text</span>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
