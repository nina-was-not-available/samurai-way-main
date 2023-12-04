import axios from "axios";

export const authAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
})

export const authAPI = {
    getAuthInfo() {
        return authAxios.get('auth/me')
            .then(res => res.data)
    }
}