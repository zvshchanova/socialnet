import React, { Component, useContext }  from "react";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import { Routes, Route} from 'react-router-dom';
import UsersConteiner from './components/Users/UsersConteiner';
import LoginPage from './components/Login/Login';
import { connect } from "react-redux"; 
import { initialiseApp } from './redux/app-reducer';
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
  componentDidMount() {       
    this.props.initialiseApp(); 
}
  render() {
  if (!this.props.initialised) {   //  должно работать урок 80  
  return <Preloader />      
  }
  return (
    <div className="App-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='App-wrapper-content'>
      
      <Routes>
          <Route path='/' element={< ProfileContainer /> } />
          {/* <Route path="/profile" element={< ProfileContainer /> } /> */}
          <Route path="/profile/:userId?" element={< ProfileContainer /> } />
          <Route path="/dialogs" element={< DialogsConteiner />} />  
          <Route path="/users" element={< UsersConteiner />} />  
          <Route path="/login" element={< LoginPage />} />  
      </Routes>
      </div>
      </div>
 );
}
}
const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})

// export default App;
export default compose(
  // withRouter,
  connect(mapStateToProps, {initialiseApp}))(App)


