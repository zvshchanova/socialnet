import React from 'react';
import  Paginator  from '../common/Paginator/Paginator';
import User from './User';


let Users = (props) => {
    return <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} />
    {
                props.users.map( u => <User user={u} key={u.id} 
                    followInProgress={props.followInProgress} 
                    unfollow={props.unfollow} 
                    follow={props.follow}/>)
    }    
    </div>
}

export default Users