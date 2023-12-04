import axios from "axios";

let usersAxios = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'b98cd8a1-a83d-4bd6-af2a-f206517dd2d9'
    }
})

export const usersAPI = {
    getUsers (page: number = 1, size: number = 5)  {
        return usersAxios.get(`users?page=${page}&count=${size}`)
            .then(res => res.data)
    },
    followUsers (friendID: number) {
        return  usersAxios.post(`follow/${friendID}`, {})
            .then(res => res.data)
    },
    unfollowUsers (friendID: number) {
        return  usersAxios.delete(`follow/${friendID}`)
            .then(res => res.data)
    }
}

// export const getUsers = (page: number = 1, size: number = 5) => {
//     return usersAxios.get(`users?page=${page}&count=${size}`)
//         .then(res => res.data)
// }
//
// export const followUsers = (friendID: number) => {
//     return  usersAxios.post(`follow/${friendID}`, {})
//         .then(res => res.data)
// }
//
// export const unfollowUsers = (friendID: number) => {
//     return  usersAxios.delete(`follow/${friendID}`)
//         .then(res => res.data)
// }