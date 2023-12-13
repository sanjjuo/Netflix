import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <div className='navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/tv-shows">TV Shows</a></li>
        <li><a href="/movies">Movies</a></li>
        <li><a href="/recently-added">Recently Added</a></li>
        <li><a href="/my-list">My List</a></li>
      </ul>
      <img
        className="logo"
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
      />
      <img
        className="avatar"
        src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
        alt='Avatar'
      />
    </div>
  );
}

export default NavBar;
