import React, { useContext } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/profile-reducer"
import MyPosts from './MyPosts';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: (text) => {
            dispatch(addPostActionCreator(text))
        },
    }
}

const MyPostsConteiner = connect(mapStateToProps , mapDispatchToProps )(MyPosts)
export default MyPostsConteiner;

