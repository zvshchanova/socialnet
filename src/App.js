import React, { useContext }  from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import { Routes, Route} from 'react-router-dom';
import UsersConteiner from './components/Users/UsersConteiner'


function App() {
  return (
  // <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className='App-wrapper-content'>
      
      <Routes>
          <Route path='/' element={< Profile /> } />
          <Route path="/profile" element={< Profile /> } />
          <Route path="/dialogs" element={< DialogsConteiner />} />  
          <Route path="/users" element={< UsersConteiner />} />  
      </Routes>
      </div>
      </div>
  //  </BrowserRouter>

 );
}
export default App;

