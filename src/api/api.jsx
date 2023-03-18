import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    header: {
        "API-KEY": "ed94ad15-172f-4d17-b32f-ceea6446071a"
    }
});

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
        return instance.get(`profile/`+  userId);
        // .then(response => {            
        // this.props.setUserProfile(response.data);
        // })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data;
//     })
// }

// follow