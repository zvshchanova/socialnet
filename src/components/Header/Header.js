import logo from './logo.svg';

import React from 'react';
import style from './Header.module.css'

const Header =() =>{
    return(
    <div className = {style.header}>
    <img src={logo} className = {style.img} alt="logo" />
    </div>)
}
export default Header;
