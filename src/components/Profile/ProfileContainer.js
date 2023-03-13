import React from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import axios from "axios";
import {setUserProfile} from '../../redux/profile-reducer';
// import withRouter from 'react-router-dom';
import { useLocation } from "react-router-dom";

class ProfileContainer extends React.Component{
    componentDidMount() {
        // let userId = this.props.match.params.userId;

        // Нужен хук  useLocation только в функциональной компоненте !!!
        // const location = useLocation();
        // const path = location.pathname;
        let userId;   // пока хардкодим
        if(!userId) {
            userId = "28349";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+  userId)
        .then(response => {            
        this.props.setUserProfile(response.data);
        })

    }

    render() {
    return(
        <Profile {...this.props} profile= {this.props.profile} />
    )

}
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile
});

// let WithUrlDataConteinerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);

