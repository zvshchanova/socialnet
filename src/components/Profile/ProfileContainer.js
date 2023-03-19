import React from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import {getUserProfile} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let mapStateToPropsRedirect = (state) => ({ 
//     isAuth: state.auth.isAuth
// });
// AuthRedirectComponent = connect(mapStateToPropsRedirect) (AuthRedirectComponent);


let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
   // isAuth: state.auth.isAuth
});

// let WithUrlDataConteinerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent); // (WithUrlDataConteinerComponent)

