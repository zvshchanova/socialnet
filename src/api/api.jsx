import axios from "axios";

const instance = axios.create({
     withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        "API-KEY": "ed94ad15-172f-4d17-b32f-ceea6446071a"
    }
});

// import {instance} from '../App';

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
    getProfile (userId) {
        console.warn('Obsolete method. Use profileAPI')
        return profileAPI.getProfile(userId)  // чтобы не переписывать старые 
    }
}
export const profileAPI = {
    // https://social-network.samuraijs.com/api/1.0/profile/status/2  - пример
    getProfile (userId) {
        return instance.get(`profile/`+  userId);
    },
    getStatus (userId) {
        return instance.get(`profile/status/`+  userId);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status });
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}



//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data;
//     })
// }

// follow