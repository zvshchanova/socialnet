import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
// import style from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo =(props) =>{    
    if(!props.profile ) {return <Preloader/>}
    return(
        <div>
        <h2>ProfileInfo:</h2>
        {/* <div>
        <img className={style.img} src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg" 
        alt="image"></img>
        </div> */}
        <div>
        {props.profile &&  (<img src={props.profile.photos.small} alt="profile-photo"/>)}
        <p>{props.profile.fullName}</p>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        </div>
    )
}
export default ProfileInfo;