import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useAuthCtx } from '../../store/authContext';
import toast from 'react-hot-toast';
import unicorn from '../../assets/dab.png';
import unicorn1 from '../../assets/one.png';

const HomePage = () => {
  const { isUserLoggedIn, logout } = useAuthCtx();
  return (
    <div className={css['container']}>
      <h1 className={css['title']}>MY FAVOURITE MOVIES 🎬</h1>
      <div className={css['homeDisplay']}>
        <div className={css.logo}>
          <img className={css['img-left']} src={unicorn} alt='logo' />
        </div>
        <div>
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
          <div className={css.logo}>
            <img className={css['img-right']} src={unicorn1} alt='logo' />
          </div>
        </div>
        {/* <div className={css.logo}>
          <img className={css.img} src={unicorn} alt='logo' />
        </div> */}
      </div>

      <div>
        <NavLink
          onClick={() => {
            logout();
            isUserLoggedIn && toast.success('You are Logged Out');
          }}
          className={css['nav-link-logout']}
          to={'/login'}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
