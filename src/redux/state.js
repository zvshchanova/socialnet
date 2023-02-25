 const ADD_POST = 'ADD-POST';
 const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
 const SEND_MESSAGE = 'SEND_MESSAGE';

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
    }
  },
  _callsubscriber() {
    console.log("State was added")
  },
  getState() {
    debugger;
    return this._state;
  },
  _addPost(newText) {
    debugger;
    let newPost = {
      id: 5,
      // message: this._state.profilePage.newPostText,    
      message: newText,   
      likescount: 0
    };
    this._state.profilePage.postsData.push(newPost);
    // this._state.profilePage.newPostText = '';
    this._callsubscriber(this._state)
  },
  subscribe(observe) {
    this._callsubscriber = observe;
  },
  dispatch(action) {
    if (action.type === ADD_POST){
      this._addPost(action.newText);
    } else
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callsubscriber(this._state)
    }else
    if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messagesData.push({id: 4, message: body})
      this._callsubscriber(this._state)
    }
  }


 }
 export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text});

 export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

 export const updateNewMessageBodyCreator = (text) => 
 ({type: UPDATE_NEW_MESSAGE_BODY, body: text});

  export default store;
  
window.state = store;
  



