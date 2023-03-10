import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleisFetching } from '../../redux/users-reducer';
import Users from "./Users";
import axios from "axios";
import Preloader from '../common/Preloader/Preloader'


class UsersContainer extends React.Component {
 
    componentDidMount() {
        this.props.toggleisFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(responce => {
        this.props.toggleisFetching(false); 
        this.props.setUsers(responce.data.items);
        this.props.setUsersTotalCount(responce.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleisFetching(true);
        this.props.setCurrentPage(pageNumber); 
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(responce => {        
        this.props.toggleisFetching(false); 
        this.props.setUsers(responce.data.items);
        this.props.setUsersTotalCount(responce.data.totalCount)
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
        isFetching: state.usersPage.isFetching
    }
};


const UsersConteiner = connect(mapStateToProps , {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleisFetching })(UsersContainer)
export default UsersConteiner;

