import React, { useContext }  from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App(props) {
  return (
  <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className='App-wrapper-content'>
      
      <Routes>
          <Route path='/' element={< Profile postsData={props.state.profilePage.postsData}/>} />
          <Route path="/profile" element={< Profile postsData={props.state.profilePage.postsData}/>} />
          <Route path="/dialogs" element={< Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>} />      
      </Routes>
      </div>
      </div>
   </BrowserRouter>

 );
}
export default App;

// useRoutes