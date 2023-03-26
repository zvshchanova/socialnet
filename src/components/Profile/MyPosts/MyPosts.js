import React, { useContext } from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";


const MyPosts =(props) =>{    
    let postsItems = props.posts.map( el => <Post id={el.id} message={el.message} likescount={el.likescount} key={el.id}/>);
    let newPostElement = React.createRef();

    const onAddPost = (values) =>{
        props.addPost(values.newPostText);
        // let text = newPostElement.current.value;     
        // props.addPostActionCreator(text);
        // newPostElement.current.value ="";
        }

    return(
            <div className={style.postBlock}>
                <h2>My Posts</h2>
                <AddNewPostForm onSubmit={ onAddPost }/>
                <div className={style.posts}>
                    { postsItems }
                </div>
            </div>
    )
}
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <div>
                    {/* <textarea ref={newPostElement}/> */}
                    <Field name= "newPostText" component="textarea"/>
                    </div>
                    <div>
                    <button >Add post</button>                    
                    {/* <button>Remove post</button> */}
                    </div>
                </form>
    )
}
AddNewPostForm = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;

