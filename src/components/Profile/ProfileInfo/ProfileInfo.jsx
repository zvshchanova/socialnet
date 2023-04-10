import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
// import style from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook'

const ProfileInfo =(profile, status) =>{    
    if(!profile ) {return <Preloader/>}
    return(
        <div>
           <h2>ProfileInfo:</h2>
            <div>
                {profile &&  (<img src={profile.photos.small} alt="profile"/>)}
                <p>{profile.fullName}</p>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;