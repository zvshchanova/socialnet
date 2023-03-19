import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    
    state = {
        editMode: false
    }
    activateEditMode = () =>{

        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{
        
        this.setState({
            editMode: false
        })
    }
    render(){

    return(

        <>
        <h2>ProfileStatus:</h2>
        {!this.state.editMode && (
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
            </div>
        )}
        {this.state.editMode &&
            <div>
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
            </div>
        }
        </>
    )
}
}
export default ProfileStatus;