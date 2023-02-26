const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
      {id: "1", message: "First post", likescount: "0"},
      {id: "2", message: "Second pos", likescount: "15"},
    ],
  };

  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newText,   
                likescount: 0
              };
            state.postsData.push(newPost);
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text});