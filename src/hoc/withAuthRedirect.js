import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

let mapStateToPropsRedirect = (state) => ({ 
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth) return <Link to='/login'/>  //!!!
            return <Component {...this.props}/>
        }
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect) (RedirectComponent); // конненктим к store

    return ConnectedAuthRedirectComponent;
}