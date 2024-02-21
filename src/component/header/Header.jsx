import React from 'react'
import './header.css'
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <header className='header'>
        <div className='header-cont'>
            <FaHome></FaHome>
            <h1>Search properties to rent</h1>
            <div className='header-input'>
                <input type="text"/>
                <button>Search</button>
                <button>Liked</button>
            </div>
        </div>
    </header>
  )
}
