import React from "react";
import { connect } from "react-redux";
import Profile from './Profile'
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect' 
import { compose } from "redux";

class ProfileContainer extends React.Component{
    componentDidMount() {
        // Нужен хук  useLocation только в функциональной компоненте !!!
        // const location = useLocation();
        // const path = location.pathname;
        // let userId = this.props.match.params.userId;
        let userId;

        if(!userId) {
            userId = this.props.authUserId;  // должно прийити из me но у меня не работает  // не приходят все  // isAuth: undefined  должен быть false
            if (!userId) {
                //this.props.history.push("/login")  // у меня нет this.props.history
            }
            userId = "28349";
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
    return(
        <Profile {...this.props} profile= {this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )}
}

let mapStateToProps = (state) => ({ 
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

 //let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataConteinerComponent = withRouter(AuthRedirectComponent);   ??? withRouter
//export default connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent); // (WithUrlDataConteinerComponent)

 export default compose(
     connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
     withAuthRedirect  //  redirect hoc
 )(ProfileContainer)
