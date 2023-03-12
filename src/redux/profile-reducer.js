const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
      {id: "1", message: "First post", likescount: "0"},
      {id: "2", message: "Second pos", likescount: "15"},
    ],
    profile: null
  };

  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "5",
                message: action.newText,   
                likescount: 0
              };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPost: ''
            };
        }
        case SET_USER_PROFILE: 
          return {...state, profile: action.profile}
        default:
            return state;
    }
}
export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});