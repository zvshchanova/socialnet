import React, { useContext }  from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import store from "./redux/store";


function App(props) {
  return (
  <BrowserRouter>
    <div className="App-wrapper">
      <Header />
      <Navbar />
      <div className='App-wrapper-content'>
      
      <Routes>
          {/* <Route path='/' element={< Profile postsData={props.state.profilePage.postsData}/>} /> p */}
          {/* <Route path="/profile" element={< Profile postsData={props.state.profilePage.postsData} dispatch={props.dispatch}/>} /> */}
          <Route path='/' element={< Profile store={props.store}/>} />
          <Route path="/profile" element={< Profile store={props.store}/>} />
          <Route path="/dialogs" element={< DialogsConteiner store={props.store} />} />      
      </Routes>
      </div>
      </div>
   </BrowserRouter>

 );
}
export default App;

// useRoutes
// dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}