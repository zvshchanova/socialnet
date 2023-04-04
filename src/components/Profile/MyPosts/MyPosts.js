import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from '../../../utils/validation/validator';
import { TextArea } from '../../common/FormControls/FormsControl'

let maxLength8 = maxLengthCreator(8);
const MyPosts = React.memo(props => {    
    let postsItems = 
    [...props.posts]
    .reverse()
    .map( el => <Post id={el.id} message={el.message} likescount={el.likescount} key={el.id}/>);
    // let newPostElement = React.createRef();

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
});
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                    <div>
                    <Field name= "newPostText" component={TextArea} validate={[required, maxLength8]} placeholder="message"/>
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

