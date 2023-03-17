import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleisFetching, toggleisFollowInProgress } from '../../redux/users-reducer';
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {
 
    componentDidMount() {
        this.props.toggleisFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        this.props.toggleisFetching(false); 
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleisFetching(true);
        this.props.setCurrentPage(pageNumber); 
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {        
        this.props.toggleisFetching(false); 
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount)
        })
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
       toggleisFollowInProgress = { this.props.toggleisFollowInProgress}    
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


const UsersConteiner = connect(mapStateToProps , {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleisFetching, toggleisFollowInProgress })(UsersContainer)
export default UsersConteiner;

