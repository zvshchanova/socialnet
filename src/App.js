import React, { useContext }  from "react";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import { Routes, Route} from 'react-router-dom';
import UsersConteiner from './components/Users/UsersConteiner'
import LoginPage from './components/Login/Login'



function App() {
  return (
  // <BrowserRouter>
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
  //  </BrowserRouter>

 );
}
export default App;

