import React from 'react';
import style from './Post.module.css';

const Post = (props) =>{
    return(
                <div className={style.item}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjctp5CU7fwIQIVk6aOIqYsQrU9d_9BDQ9g&usqp=CAU' />
                    {props.message}
                    <div>
                        <span>Likes {props.likescount}</span>
                    </div>
                </div>
    )
}
export default Post;

