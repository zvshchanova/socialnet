import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'

const ProfileInfo =(props) =>{
    if(!props.profile ) {
        return <Preloader/>
    }
    return(
        <div>
        <div>
        <img className={style.img} src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg" 
        alt="image"></img>
        </div>
        <div>
        <img src={props.profile.photos.small}/>
        </div>
        </div>
    )
}
export default ProfileInfo;