import React, { Component, useContext }  from "react";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsersConteiner from './components/Users/UsersConteiner';
import LoginPage from './components/Login/Login';
import { connect } from "react-redux"; 
import { initialiseApp } from './redux/app-reducer';
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
// import axios from "axios";

// export const instance = axios.create({
//      withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     header: {
//         "API-KEY": "ed94ad15-172f-4d17-b32f-ceea6446071a"
//     }
// });

class App extends Component {
  componentDidMount() {       
    this.props.initialiseApp(); 
}

  render() {
  if (!this.props.initialised) {   //  должно работать урок 80  
  return <Preloader />      
  }
  return (
  //  <BrowserRouter>
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
    // </BrowserRouter>

 );
}
}
const mapStateToProps = (state) => ({
  initialised: state.app.initialised
})

// export default App;
export default compose(connect(mapStateToProps, {initialiseApp}))(App)
//withRouter

