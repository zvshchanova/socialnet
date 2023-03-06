import React from 'react';
// import {followAC} from "../../../redux/users-reducer"
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer';
import Users from './Users';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
         }
    }
}

const UsersConteiner = connect(mapStateToProps , mapDispatchToProps )(Users)
export default UsersConteiner;

