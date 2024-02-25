import React from 'react';
import './header.css';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='header-cont'>
        <FaHome />
        <h1>Search properties to rent</h1>
        {/* <Link></Link> */}
        <div className='header-input'>
          <input type="text" />
          <button>Search</button>
          <Link to="/like">Like</Link>
        </div>
      </div>
    </header>
  );
}
