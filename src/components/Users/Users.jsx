import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return <div>
    <div>
        {pages.map(p => {
        return  <span onClick={() => { props. onPageChanged(p);}}  className={props.currentPage === p ? styles.selectPage : undefined}  style={{"cursor": "pointer"}}>{p}</span>
        })}

    </div>
    {
        props.users.map( u => 
        <div key={u.id}>
            <div>
                <NavLink to={'/profile/'+ u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
            {u.followed 
            // ? <button disabled={props.followInProgress} onClick={() => {
            ? <button disabled={props.followInProgress.some(id => id === u.id )} onClick={() => {

                props.toggleisFollowInProgress(true, u.id);
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { 
                    withCredentials: true,
                    header: {
                        "API-KEY": "ed94ad15-172f-4d17-b32f-ceea6446071a"
                    }
                })
                .then(responce => {
                    if(responce.data.resultCode ===0){
                        props.unfollow(u.id); 
                    }
                    props.toggleisFollowInProgress(false, u.id)
                });                            
            }}>Unfollow</button>

            : <button disabled={props.followInProgress.some(id => id === u.id )} onClick={() => {props.follow(u.id)
                props.toggleisFollowInProgress(true, u.id);
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{ 
                    withCredentials: true, 
                    header: {
                        "API-KEY": "ed94ad15-172f-4d17-b32f-ceea6446071a"
                    }
                })
                .then(responce => {
                    if(responce.data.resultCode ===0){
                        props.follow(u.id); 
                    }
                    props.toggleisFollowInProgress(false, u.id);

                });  
            }}>Follow</button>
            }
            </div>
            <div>{u.name}</div>          
            <div>{u.status}</div>
            {/* <div>{"u.location.city"}</div> 
            <div>{"u.location.counntry"}</div> */}
        </div>
        )
    }
    </div>
}

export default Users