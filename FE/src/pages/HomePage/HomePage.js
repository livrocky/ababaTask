/* eslint-disable no-unused-vars */
import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useAuthCtx } from '../../store/authContext';
import toast from 'react-hot-toast';
import unicorn from '../../assets/dab.png';
import unicorn1 from '../../assets/one.png';
import { useState } from 'react';
// import Button from '../../components/UI/Button';

const HomePage = () => {
  const { isUserLoggedIn, logout } = useAuthCtx();

  const [movie, setMovie] = useState([
    { id: 9, title: 'Sound of Metal' },
    { id: 1, title: 'Forest Gump' },
    { id: 2, title: 'The Godfather' },
    { id: 3, title: 'Eternal Sunshine of the Spotless Mind' },
    { id: 6, title: 'Call Me by Your Name' },
    { id: 7, title: 'Top Gun' },
    { id: 4, title: 'Fear and Loathing is Las Vegas' },
    { id: 8, title: 'City of God' },
    { id: 5, title: 'Snatch' },
  ]);

  return (
    <div className={css['container']}>
      <h1 className={css['title']}>MY FAVOURITE MOVIES 🎬</h1>
      <div className={css['homeDisplay']}>
        <div className={css.logo}>
          <img className={css['img-left']} src={unicorn} alt='logo' />
        </div>
        <div>
          {movie &&
            movie
              .sort((a, b) => (a.id > b.id ? 1 : -1))
              .map((film) => {
                return (
                  <ul>
                    <li key={film.id} className={css['list']}>
                      {film.id} - {film.title}
                    </li>
                  </ul>
                );
              })}
        </div>
        <div className={css.logo}>
          <img className={css['img-right']} src={unicorn1} alt='logo' />
        </div>
      </div>

      <div>
        <NavLink
          onClick={() => {
            logout();
            isUserLoggedIn && toast.success('You are Logged Out');
          }}
          className={css['logout']}
          to={'/login'}
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
