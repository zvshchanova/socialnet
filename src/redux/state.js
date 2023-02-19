  import {rerenderEntireTree} from "../render"
  let state = {
    profilePage: {
      postsData: [
        {id: "1", message: "First post", likescount: "0"},
        {id: "2", message: "Second pos", likescount: "15"},
      ],
      // newPostText: 'it-kamasutra'
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
      ]
    }

  }
  window.state = state;
  
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likescount: 0
  };
  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state)
}


  export default state;