const ADD_POST = 'ADD-POST';

  export const profileReducer = (state,action) => {
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