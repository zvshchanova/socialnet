import React from 'react';
import Header from './Header';
import { logout} from '../../redux/auth-reducer';
import { connect } from "react-redux"; 


class HeaderContainer extends React.Component {
    // componentDidMount() {       
    //     this.props.getAuthUserData(); 
    // }

    render () {
    return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,        
        login: state.auth.login
}
};

// export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
export default connect(mapStateToProps, {logout})(HeaderContainer)
