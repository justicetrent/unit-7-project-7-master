import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
    render () {
        return (
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to='/title/New York City'>NYC</NavLink></li>
                    <li><NavLink to='/title/Shanghai'>Shanghai</NavLink></li>
                    <li><NavLink to='/title/St. Tropez'>St. Tropez</NavLink></li>
                </ul>
            </nav>
    )
    }
}


export default Nav