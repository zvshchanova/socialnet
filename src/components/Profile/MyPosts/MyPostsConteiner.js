import React from 'react';
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

