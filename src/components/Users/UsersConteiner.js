import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow,  setCurrentPage, toggleisFollowInProgress, getUsers } from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 


class UsersContainer extends React.Component { 
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {     
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
       return <>
       { this.props.isFetching ? <Preloader/> : null }
       <Users totalUsersCount = { this.props.totalUsersCount} 
       pageSize = { this.props.pageSize} 
       currentPage = { this.props.currentPage} 
       onPageChanged = { this.onPageChanged} 
       users = { this.props.users} 
       unfollow = { this.props.unfollow} 
       follow = { this.props.follow}    
    //    toggleisFollowInProgress = { this.props.toggleisFollowInProgress}    
       followInProgress = { this.props.followInProgress }
       />    
       </>    
    };
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:  state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
};

// let AuthRedirectComponent = withAuthRedirect(UsersContainer)


// const UsersConteiner = connect(mapStateToProps , {
//     follow, unfollow, setCurrentPage, 
//     toggleisFollowInProgress, getUsers })(UsersContainer)

// export default connect(mapStateToProps , {follow, unfollow, setCurrentPage, toggleisFollowInProgress, getUsers })(UsersContainer)
// export default connect(mapStateToProps , {follow, unfollow, setCurrentPage, toggleisFollowInProgress, getUsers })(AuthRedirectComponent)

export default withAuthRedirect(connect(mapStateToProps , {follow, unfollow, setCurrentPage, toggleisFollowInProgress, getUsers })
                (UsersContainer))

