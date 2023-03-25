import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile =(props) =>{
    return(
        <main className={style.content}>
        <h1>Profile</h1>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsConteiner />
        </main>
    )
}
export default Profile;

