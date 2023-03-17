const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW'; 
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_ISFETCHING = 'TOGGLE_ISFETCHING';
const TOGGLE_IS_FOLLOW_PROGRESS = 'TOGGLE_IS_FOLLOW_PROGRESS';

let initialState = {    
        users: [],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        // followInProgress: false
         followInProgress: [2]
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state,  currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state,  totalUsersCount: action.count}
        case SET_TOTAL_USER_COUNT:
                return {...state,  totalUsersCount: action.count}
        case TOGGLE_ISFETCHING:
            return {...state,  isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOW_PROGRESS:
            return {...state,  
                followInProgress: action.isFetching
                ? [...state.followInProgress, action.userId]
                : state.followInProgress.filter(id => id !=action.userId)}
        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, count: totalUsersCount });
export const toggleisFetching = (isFetching) => ({ type: TOGGLE_ISFETCHING, isFetching });
export const toggleisFollowInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOW_PROGRESS, isFetching, userId });
