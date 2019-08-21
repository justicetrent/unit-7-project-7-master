import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// Nav handles the three links, that fetch to flickr and displays each other nav link titles upon search. 
class Nav extends Component {
    render () {
        return (
            <nav className="main-nav">
                {/* Each Nav Link is a direct path that allows the URL to change and display the proper title */}
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