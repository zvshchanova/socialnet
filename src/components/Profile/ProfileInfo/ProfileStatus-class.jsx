import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {    
    // statusInputRef = React.createRef()
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () =>{
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () =>{        
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value });        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState(
                {
                    status: this.props.status
                }
            )
        }
    }
    render(){
    return(
        <>
        <h2>ProfileStatus:</h2>
        {!this.state.editMode && (
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
            </div>
        )}
        {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            </div>
        }
        </>
    )
}
}
export default ProfileStatus;