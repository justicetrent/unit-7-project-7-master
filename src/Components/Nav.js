import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const nav = () => {
    return(
        <div>
            <NavLink to= 'Topic1'></NavLink>
            <NavLink to= 'Topic2'></NavLink>
            <NavLink to= 'Topic3'></NavLink>
        </div>
    )
}

export default Nav;