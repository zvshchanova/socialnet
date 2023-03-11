import React from 'react';
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import Users from "./Users";
import axios from "axios";


class UsersContainer extends React.Component {
 
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.setUsersTotalCount(responce.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.setUsersTotalCount(responce.data.totalCount)
        })
    }

    render() {
       return <Users totalUsersCount = { this.props.totalUsersCount} 
       pageSize = { this.props.pageSize} 
       currentPage = { this.props.currentPage} 
       onPageChanged = { this.onPageChanged} 
       users = { this.props.users} 
       unfollow = { this.props.unfollow} 
       follow = { this.props.follow}        
       />        
    };
}

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

const UsersConteiner = connect(mapStateToProps , mapDispatchToProps )(UsersContainer)
export default UsersConteiner;

