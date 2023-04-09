import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';

let User = ({user, followInProgress, unfollow, follow}) => {
    return (
    <div>
            <div>
                <NavLink to={'/profile/'+ user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="prof"/>
                </NavLink>
            </div>
            <div>
            {user.followed 
            ? <button disabled={followInProgress.some(id => id === user.id )} 
                onClick={() => { unfollow(u.id)}}>Unfollow</button>
            : <button disabled={followInProgress.some(id => id === user.id )}
            onClick={() => { follow(user.id)}}>Follow</button>
            }
            </div>
            <div>{user.name}</div>          
            <div>{user.status}</div>
            {/* <div>{"user.location.city"}</div> 
            <div>{"user.location.counntry"}</div> */}

    </div>)
}

export default User