import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'

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
            <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/></div>
            <div>
            {u.followed 
            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
            : <button onClick={() => {props.follow(u.id)}}>Follow</button>
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