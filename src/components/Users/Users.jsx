import axios from "axios";
import React from "react";
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    getUsers = () => {
        if(this.props.users.length === 0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(responce => {
            this.props.setUsers(responce.data.items)
            }
         )
    }}
    render() {
        return (<div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.users.map( u => 
                <div key={u.id}>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/></div>
                    <div>{u.followed 
                    ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                    : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>
                    }</div>
    
                    <div>{u.name}</div>          
    
                    <div>{u.status}</div>
                    <div>{"u.location.city"}</div> 
                    <div>{"u.location.counntry"}</div>
                </div>
                )
            }
            </div>
        )
    }

}

export default Users