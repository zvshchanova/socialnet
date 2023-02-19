import React from 'react';
import style from './Nav.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () =>{

    return(
      <nav className={style.nav}> 
        <div className={style.item}>
        <NavLink to="/profile" className={({ isActive }) => isActive ? style.active : ''}>Profile</NavLink>

        </div>
        <div className={style.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? style.active : ''}>Dialogs</NavLink>  
        </div>

        <div className={style.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? style.active : ''} >News</NavLink>          
        </div>

        <div className={style.item}>
        <NavLink to="/dialogs" className={({ isActive }) => isActive ? style.active : ''}>Musik</NavLink>     
        </div>  
      </nav> 
    )
}
  export default Navbar;

