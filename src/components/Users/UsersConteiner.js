import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow,  setCurrentPage, toggleisFollowInProgress, getUsers } from '../../redux/users-reducer';

import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 
import { compose } from 'redux';
import { getUsersSelector, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowInProgress } from '../../redux/users-selectors';


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

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage:  state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followInProgress: state.usersPage.followInProgress
//     }
// };
const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
};
export default compose(
    connect(mapStateToProps , {follow, unfollow, setCurrentPage, toggleisFollowInProgress, getUsers }),
    withAuthRedirect //  redirect hoc
)(UsersContainer)

