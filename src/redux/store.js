 import {profileReducer} from './profile-reducer';
 import {dialogsReducer} from './dialogs-reducer';
 import {sidebarReducer} from './sidebar-reducer';

 let store = {
  _state: {
    profilePage: {
      postsData: [
        {id: "1", message: "First post", likescount: "0"},
        {id: "2", message: "Second pos", likescount: "15"},
      ],
    //  newPostText: 'it-kamasutra'
    },
    dialogsPage: {
      dialogsData: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Sophia'},
        {id: 3, name: 'Alex'}
      ],
      messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'Yo!'},
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callsubscriber() {
    console.log("State was added")
  },
  getState() {
    debugger;
    return this._state;
  },

  subscribe(observe) {
    this._callsubscriber = observe;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callsubscriber(this._state)

  }
 }
  export default store;
  
window.state = store;
  



