import React from "react";
import styles from './users.module.css'

const Users = (props) =>{
 if(props.users.length === 0){
// props.setUsers( 
//     //  users: 
//     [
//     {id: 1, photoUrl: '',followed: true, fullname: 'Roman Orekhovskiy', status: "I am happy", location: {city: "Stokholm", counntry: "Sweden"}},
//     {id: 2, photoUrl: '',followed: false, fullname: 'Sophia Bnivier', status: "I am boss", location: {city: "Kiev", counntry: "Ukraine"}},
//     {id: 3, photoUrl: '',followed: true, fullname: 'Alex Gorbatovskiy', status: "I am a student", location: {city: "Warshava", Poland: "Sweden"}}
//     ]  
//  )
 }

    return (<div>
        {
            props.users.map( u => 
            <div key={u.id}>
                <div>🌞<img src={u.photoUrl} className={styles.userPhoto}/></div>
                <div>{u.followed 
                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>
                }</div>

                <div>{u.fullname}</div>            

                <div>{u.status}</div>
                <div>{u.location.city}</div> 
                <div>{u.location.counntry}</div>
            </div>
            )
        }
        </div>
    )
};

export default Users