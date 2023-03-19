import React from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 
import { compose } from "redux";

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
    profile: state.profilePage.profile,
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataConteinerComponent = withRouter(AuthRedirectComponent);
//export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent); // (WithUrlDataConteinerComponent)

export default compose(
    connect(mapStateToProps, {getUserProfile}),
//    withAuthRedirect  //  redirect hoc
)(ProfileContainer)
