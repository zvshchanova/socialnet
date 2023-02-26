import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile =(props) =>{
    return(
        <main className={style.content}>
        <ProfileInfo />
        <MyPosts posts={props.postsData} dispatch={props.dispatch}/>
        </main>

    )
}
export default Profile;

