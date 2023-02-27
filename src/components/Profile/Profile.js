import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Profile =(props) =>{
    return(
        <main className={style.content}>
        <ProfileInfo />
        {/* <MyPosts posts={props.postsData} dispatch={props.dispatch}/> */}
        <MyPostsConteiner store={props.store}/>

        </main>

    )
}
export default Profile;

