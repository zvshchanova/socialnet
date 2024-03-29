import {profileAPI, usersAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST'

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
                message: action.newPostText,   
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
        case DELETE_POST: 
          return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({ type: SET_STATUS, status});
export const deletePost = (postId) => ({ type: DELETE_POST, postId});


export const getUserProfile = (userId) => async (dispatch) =>{   
  let response = await usersAPI.getProfile(userId);
  // .then(response => {            
    dispatch(setUserProfile(response.data));
  // })
}

export const getStatus = (userId) =>  async (dispatch) => {    
  let response = await profileAPI.getStatus(userId);
  // .then(response => {  
    dispatch(setStatus(response.data));
  // })
} 


export const updateStatus = (status) =>  async (dispatch) => {    
  let response = await profileAPI.updateStatus(status)
  // .then(response => { 
    if (response.data.resultCode === 0 )           
    dispatch(setStatus(status));
  // })
} 


