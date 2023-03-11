import React from 'react';
// import {followAC} from "../../../redux/users-reducer"
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import Users from './Users';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:  state.usersPage.currentPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
         },
         unfollow: (userId) => {
            dispatch(unfollowAC(userId))
         },
         setUsers: (users) => {
            dispatch(setUsersAC(users))
         },
         setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
         },
         setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
         }
    }
}

const UsersConteiner = connect(mapStateToProps , mapDispatchToProps )(Users)
export default UsersConteiner;

