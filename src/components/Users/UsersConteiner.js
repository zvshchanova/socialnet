import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow,  setCurrentPage, toggleisFollowInProgress, requestUsers } from '../../redux/users-reducer';

import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowInProgress } from '../../redux/users-selectors';


class UsersContainer extends React.Component { 
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        // const {currentPage, pageSize} = this.props;  // локальная деструктуризация внутри метода
        // this.props.getUsers(currentPage, pageSize);
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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
};
export default compose(
    connect(mapStateToProps , {follow, unfollow, setCurrentPage, toggleisFollowInProgress, getUsers: requestUsers }),
    withAuthRedirect //  redirect hoc
)(UsersContainer)

