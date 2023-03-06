const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW'; 
const SET_USERS = 'SET_USERS'

let initialState = {    
        users: [
            // {id: 1, photoUrl: '',followed: true, fullname: 'Roman Orekhovskiy', status: "I am happy", location: {city: "Stokholm", counntry: "Sweden"}},
            // {id: 2, photoUrl: '',followed: false, fullname: 'Sophia Bnivier', status: "I am boss", location: {city: "Kiev", counntry: "Ukraine"}},
            // {id: 3, photoUrl: '',followed: true, fullname: 'Alex Gorbatovskiy', status: "I am a student", location: {city: "Warshava", Poland: "Sweden"}}
        
        ]   
};

export const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case FOLLOW:   
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed:true}
                }
                return u
            })
        };      
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u
                })
            }; 
        case SET_USERS:
            return {
                ...state,
                users: [ ...state.users, ...action.users]
            }
            
        default:
            return state;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
