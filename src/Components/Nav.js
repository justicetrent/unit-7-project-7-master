import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    
    <nav className = "main-nav">
        <ul>
            <li><NavLink to= 'Topic1'>NYC</NavLink></li>
            <li><NavLink to= 'Topic2'>Shanghai</NavLink></li>
            <li><NavLink to= 'Topic3'>St. Tropez</NavLink></li>
        </ul>
    </nav>
)


export default Nav