import React, { useContext } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator} from "../../../redux/state"

const MyPosts =(props) =>{
// const state = useContext(StateContext);
     let postsItems = props.posts.map( el => <Post id={el.id} message={el.message} likescount={el.likescount} key={el.id}/>);
    // let postsItems = state.posts.map( el => <Post id={el.id} message={el.message} likescount={el.likescount} key={el.id}/>);

    let newPostElement = React.createRef();



    const addPost = () =>{
        let text = newPostElement.current.value;     
        // props.dispatch(text);  
        props.dispatch(addPostActionCreator(text));
        newPostElement.current.value ="";
        }

    return(
            <div className={style.postBlock}>
                <h2>My Posts</h2>
                <div>
                    <div>
                    <textarea ref={newPostElement}/>
                    </div>
                    <div>
                    <button  onClick={ addPost }>Add post</button>                    
                    <button>Remove post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    { postsItems }
                </div>

            </div>

    )
}
export default MyPosts;

