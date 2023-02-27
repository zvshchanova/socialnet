import React, { useContext } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/profile-reducer"
import MyPosts from './MyPosts';

const MyPostsConteiner =(props) =>{

  let state = props.store.getState();

    const addPost = (text) =>{
        props.store.dispatch(addPostActionCreator(text));
        };

    return(
        <MyPosts 
        addPostActionCreator = {addPost} 
        posts={state.profilePage.postsData}/>
    )
}
export default MyPostsConteiner;

