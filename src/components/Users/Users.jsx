import React from 'react';
import  Paginator  from '../common/Paginator/Paginator'
import User from './User';

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i=1; i<=pagesCount; i++) {
        pages.push(i)
    }

    return <div>
    <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
    <div>
    {
        props.users.map( u => <User user={u} key={u.id} 
                                    followInProgress={props.followInProgress} 
                                    unfollow={props.unfollow} 
                                    follow={props.follow}/>)
    }
    </div>
    </div>
}

export default Users