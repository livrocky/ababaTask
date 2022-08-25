import css from './HomePage.module.css';
import React from 'react';

const HomePage = () => {
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
      </ul>
    </div>
  );
};

export default HomePage;
