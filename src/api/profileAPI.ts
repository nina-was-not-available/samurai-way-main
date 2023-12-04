import axios from "axios";

let profileAxios = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const getProfile = (userId: string) => {
    return profileAxios.get(`profile/${userId}` )
        .then(res => res.data)
}