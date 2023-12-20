import {authAPI, GetAuthType, ResponseAuthType} from "../api/authAPI";
import {AppDispatch, AppThunk} from "./reduxStore";
import {stopSubmit} from "redux-form";

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
        case "AUTH/SET-USER-DATA":
            return {...state, ...action.payload.data, isAuth: action.payload.isAuth}
        default:
            return state
    }
}

type SetUserDataAT = ReturnType<typeof setUserData>

//data: InitialAuthStateType
export const setUserData = (data: GetAuthType, isAuth: boolean) => ({type: 'AUTH/SET-USER-DATA', payload: {data, isAuth}} as const)

export const getAuthInfoThunk = () => async (dispatch: AppDispatch) => {
    try {
        let res = await authAPI.getAuthInfo()
        if (res.resultCode === 0) {
            dispatch(setUserData(res.data, true))
        }
    } catch (e) {
        console.log(e)
    }
}

export const loginThunk = (email: string, password: string, rememberMe: boolean): AppThunk => async dispatch => {
    try {
       let res = await authAPI.login(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(getAuthInfoThunk())
        }else {
            let message = res.data.messages.length > 0? res.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
    catch (e) {
        console.log(e)
    }
}

export const logoutThunk = (): AppThunk => async dispatch => {
    try {
        let res = await authAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setUserData({id: null, email: null, login: null}, false))
        }
    }
    catch (e) {
        console.log(e)
    }
}