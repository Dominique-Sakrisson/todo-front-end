import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink className='links' to='/'>Home</NavLink>
                <NavLink className='links' to='/login'>Log in</NavLink>
                <NavLink className='links' to='signup'> Sign Up</NavLink>
                <NavLink className='links' to='/todos'>Todos</NavLink>
                <NavLink className='links' to='/todos/CurrentUser'>My Todos</NavLink>
            </div>
        )
    }
}
