import React from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component{
    componentDidMount() {
        // Нужен хук  useLocation только в функциональной компоненте !!!
        // const location = useLocation();
        // const path = location.pathname;
        let userId;   // пока хардкодим
        if(!userId) {
            userId = "28349";
        }
        this.props.getUserProfile(userId)
    }

    render() {
    return(
        <Profile {...this.props} profile= {this.props.profile} />
    )}
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile
});

// let WithUrlDataConteinerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);

