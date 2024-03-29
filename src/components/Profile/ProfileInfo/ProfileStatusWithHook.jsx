import React, {useState, useEffect} from 'react';

const ProfileStatusWithHook = (props) =>{    
const [editMode, setEditMode] = useState(false);
const [status, setStatus] = useState(props.status);

const activateEditMode = () =>{
    setEditMode(true);
}
const deactivateEditMode = () =>{
    setEditMode(false);
    props.updateStatus(status);
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);        
}
useEffect( () => {
    setStatus(props.status)
},[props.status]);

    return(
        <>
        <h2>ProfileStatus:</h2>
        {!editMode && (
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
            </div>
        )}
        {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            </div>
        }
        </>
    )
}

export default ProfileStatusWithHook;