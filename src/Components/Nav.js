import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    
    <nav className = "main-nav">
        <NavLink to= 'Topic1'>NYC</NavLink>
        <NavLink to= 'Topic2'>Shanghai</NavLink>
        <NavLink to= 'Topic3'>St. Tropez</NavLink>
    </nav>
);


export default Nav;