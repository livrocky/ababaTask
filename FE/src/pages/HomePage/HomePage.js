import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { useAuthCtx } from '../../store/authContext';
import toast from 'react-hot-toast';
import unicorn from '../../assets/dab.png';
import unicorn1 from '../../assets/one.png';
import { useState } from 'react';
import Button from '../../components/UI/Button';
import Icon from '../../components/UI/Icon/Icon';

const HomePage = () => {
  const { isUserLoggedIn, logout } = useAuthCtx();
  const [movie, setMovie] = useState([
    { id: 9, title: 'Sound of Metal' },
    { id: 8, title: 'City of God' },
    { id: 2, title: 'The Godfather' },
    { id: 1, title: 'Forest Gump' },
    { id: 6, title: 'Call Me by Your Name' },
    { id: 3, title: 'Eternal Sunshine of the Spotless Mind' },
    { id: 7, title: 'Top Gun' },
    { id: 4, title: 'Fear and Loathing is Las Vegas' },
    { id: 5, title: 'Snatch' },
  ]);

  const sortAscending = () => {
    const temp = movie.map((item) => item);
    setMovie(temp.sort((a, b) => (a.id > b.id ? 1 : -1)));
  };

  const sortDescending = () => {
    const temp = movie.map((item) => item);
    setMovie(temp.sort((a, b) => (a.id < b.id ? 1 : -1)));
  };

  return (
    <div className={css['container']}>
      <h1 className={css['title']}>MY FAVOURITE MOVIES 🎬</h1>
      <div className={css['sort-btns']}>
        <Button button secondary submit onClick={sortAscending} className={['sort-btn']}>
          <Icon icon='fa-arrow-down' />
        </Button>
        <Button button primary submit onClick={sortDescending} className={['sort-btn']}>
          <Icon icon='fa-arrow-up' />
        </Button>
      </div>
      <div className={css['homeDisplay']}>
        <div className={css.logo}>
          <img className={css['img-left']} src={unicorn} alt='logo' />
        </div>
        <div>
          {movie &&
            movie.map((film) => {
              return (
                <ul key={film.id}>
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
