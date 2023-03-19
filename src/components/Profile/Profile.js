import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile =(props) =>{
    debugger
    return(
        <main className={style.content}>
        <h1>Profile</h1>
        <ProfileInfo profile={props.profile} />
        <MyPostsConteiner />
        </main>
    )
}
export default Profile;

