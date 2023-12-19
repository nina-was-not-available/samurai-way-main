import axios from "axios";

let profileAxios = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/profile/`,
    headers: {
        'API-KEY': 'b98cd8a1-a83d-4bd6-af2a-f206517dd2d9'
    },
    withCredentials: true
})

// export const getProfile = (userId: string) => {
//     return profileAxios.get(`profile/${userId}` )
//         .then(res => res.data)
// }
export const profileAPI = {
    getProfile(userId: string) {
        return profileAxios.get(`${userId}` )
            .then(res => res.data)
    },
    getStatus(userId: string) {
        return profileAxios.get(`status/${userId}` )
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return profileAxios.put(`status/`, {status} )
            .then(res => res.data)
    },
}