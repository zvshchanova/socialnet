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
    }

}



// export const getUsers = (currentPage =1, pageSize=10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//     .then(response => {
//         return response.data;
//     })
// }

// follow