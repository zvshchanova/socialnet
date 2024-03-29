import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsRedirect = (state) => ({ 
    isAuth: state.auth.isAuth
    // login: state.auth.login
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) {
            // return navigate("/login");  только в функциональной компоненте  //let navigate = useNavigate();
            return <Navigate to="/login" />
            } 
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (RedirectComponent); // конненктим к store

    return ConnectedAuthRedirectComponent;
}