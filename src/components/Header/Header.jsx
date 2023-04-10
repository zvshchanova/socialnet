import logo from './logo.svg';

import React from 'react';
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header =(props) =>{
    debugger
    return(
    <div className = {style.header}>
    <img src={logo} className = {style.img} alt="logo" />
    <div className= {style.loginBlock}>
        {props.isAuth 
            ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
            : <NavLink to={'/login'} >Login</NavLink> }   
    </div>
    </div>)
}
export default Header;
