import React from "react";
import {Facoins} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Facoins className='icon'/>
        <h1>Coin <span className="purple">Search</span></h1>
        </div>;
    </div>
  )
};

export default Navbar;
