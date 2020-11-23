import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => 
 <div className='nav-container'>
     <NavLink
        to='/'
        exact>Log Out
    </NavLink>
 </div>

export default NavBar