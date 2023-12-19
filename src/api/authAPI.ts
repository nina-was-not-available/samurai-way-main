import axios from "axios";

export const authAxios = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'b98cd8a1-a83d-4bd6-af2a-f206517dd2d9'
    },
})

export type ResponseAuthType<T> = {
    resultCode: number
    messages: string[],
    data: T
}
export type GetAuthType = {
    id: number | null,
    email: string | null,
    login: string | null
}

export const authAPI = {
    getAuthInfo() {
        return authAxios.get<ResponseAuthType<GetAuthType>>('auth/me')
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return authAxios.post<ResponseAuthType<{userId: number}>>('auth/login', {email, password, rememberMe})
    },
    logout() {
        return authAxios.delete<ResponseAuthType<{}>>('auth/login')
    }
}

