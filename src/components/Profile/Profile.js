import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile =() =>{
    return(
        <main className={style.content}>
        <ProfileInfo />
        {/* <MyPosts posts={props.postsData} dispatch={props.dispatch}/> */}
        <MyPostsConteiner />

        </main>

    )
}
export default Profile;

