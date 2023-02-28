import React, { useContext } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/profile-reducer"
import MyPosts from './MyPosts';
import { StoreContext } from '../../../redux/storeContext';

const MyPostsConteiner =() =>{

    return(
        <StoreContext.Consumer> 
        { store => {
        let state = store.getState();
        const addPost = (text) =>{
            store.dispatch(addPostActionCreator(text));
        };

        return (
        <MyPosts 
        addPostActionCreator = {addPost} 
        posts={state.profilePage.postsData}/>
        )
    }
    }
        </StoreContext.Consumer>

    )
}
export default MyPostsConteiner;

