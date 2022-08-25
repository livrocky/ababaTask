import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useAuthCtx } from '../../store/authContext';
import toast from 'react-hot-toast';

const HomePage = () => {
  const { isUserLoggedIn, logout } = useAuthCtx();
  return (
    <div className={css['container']}>
      <h1 className={css['title']}>MY FAVOURITE MOVIES</h1>
      <ul className={css['list']}>
        <li>Forest Gump</li>
        <li>The Godfather</li>
        <li>Eternal Sunshine of the Spotless Mind</li>
        <li>Fear and Loathing in Las Vegas</li>
        <li>Snatch</li>
        <li>Call Me by Your Name</li>
        <li>Top Gun</li>
        <li>City of God</li>
        <li>Sound of Metal</li>
      </ul>
      <div>
        <NavLink
          onClick={() => {
            logout();
            isUserLoggedIn && toast.success('You are Logged Out');
          }}
          className={css['nav-link']}
          to={'/login'}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
