import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile =(props) =>{
     debugger;
    return(
        <main className={style.content}>
        <ProfileInfo />
        <MyPosts posts={props.postsData} addPost={props.addPost}/>
        </main>

    )
}
export default Profile;

