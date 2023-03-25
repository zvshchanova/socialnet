import {profileAPI, usersAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
      {id: "1", message: "First post", likescount: "0"},
      {id: "2", message: "Second pos", likescount: "15"},
    ],
    profile: null,
    status: ""
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
        case SET_STATUS: {
          return { ...state, status: action.status }
        }
        case SET_USER_PROFILE: 
          return {...state, profile: action.profile}
        default:
            return state;
    }
}
export const addPostActionCreator = (text) => ({ type: ADD_POST, newText: text});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({ type: SET_STATUS, status});

export const getUserProfile = (userId) => {
  return (dispatch) => {    
  usersAPI.getProfile(userId)
  .then(response => {            
    dispatch(setUserProfile(response.data));
  })
} 
}

export const getStatus = (userId) => {  
  return (dispatch) => {    
  profileAPI.getStatus(userId)
  .then(response => {  
    debugger;          
    dispatch(setStatus(response.data));
  })
} 
}

export const updateStatus = (status) => {  
  return (dispatch) => {    
  profileAPI.updateStatus(status)
  .then(response => { 
    if (response.data.resultCode === 0 )           
    dispatch(setStatus(status));
  })
} 
}