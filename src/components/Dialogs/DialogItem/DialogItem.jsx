import React from "react"
import { NavLink } from "react-router-dom";
import style from './../Dialogs.module.css'


const DialogItem = (props) => {
    let path = "/dialogs/"+ props.id;
    return (
        <div className={style.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};


export default DialogItem;