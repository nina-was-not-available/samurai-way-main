import {authAPI} from "../api/authAPI";
import {AppDispatch} from "./reduxStore";

const initialAuthState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialAuthStateType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

type ActionAuthType = SetUserDataAT

export const authReducer = (state: InitialAuthStateType = initialAuthState, action: ActionAuthType) => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload.data, isAuth: true}
        default:
            return state
    }
}

type SetUserDataAT = ReturnType<typeof setUserData>

//data: InitialAuthStateType
export const setUserData = (data: InitialAuthStateType) => {
    return {
        type: 'SET-USER-DATA',
        payload: {data}
    } as const
}

export const getAuthInfoThunk = () => async (dispatch: AppDispatch) => {
    try {
        let res = await authAPI.getAuthInfo()
        if (res.resultCode === 0) {
            dispatch(setUserData(res.data))
        }
    } catch (e) {
        console.log(e)
    }
}