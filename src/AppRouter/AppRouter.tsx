import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { About } from '../Routes/About';
import { Home } from '../Routes/Home';
import { NoMatch } from '../Routes/NoMatch';
import s from './AppRouter.module.css';

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-hook='location-display'>{location.pathname}</div>;
};

export const AppRouter = () => (
  <div className={s.navRoutes} data-hook='app-router'>
    <Link className={s.link} data-hook='home-link' to='/'>Home</Link>
    <Link className={s.link} data-hook='about-link' to='/about'>About</Link>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>

    <LocationDisplay />
  </div>
);
