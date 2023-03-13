import logo from './logo.svg';

import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header =(props) =>{
    return(
    <div className = {style.header}>
    <img src={logo} className = {style.img} alt="logo" />
    <div className= {style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'} >Login</NavLink> }   
    </div>
    </div>)
}
export default Header;
