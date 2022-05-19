import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { About } from '../Routes/About';
import { Home } from '../Routes/Home';
import { NoMatch } from '../Routes/NoMatch';
import './AppRouter.css';

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-hook='location-display'>{location.pathname}</div>;
};

export const AppRouter = () => (
  <div className='nav-routes' data-hook='app-router'>
    <Link data-hook='home-link' to='/'>Home</Link>
    <Link data-hook='about-link' to='/about'>About</Link>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>

    <LocationDisplay />
  </div>
);
