import {usersAPI} from "../api/usersApi";
import {AppDispatch} from "./reduxStore";
import {deleteFriend, setFriends} from "./friendsReducer";

export type ActionType =
    makeFriendsAT
    | deleteFromFriendsAT
    | setUsersAT
    | SetCurrentPageAT
    | SetTotalUsersAT
    | SetIsLoadingAT
    | IsFollowingButtonDisabledAT
export type InitialUsersType = typeof initialState

export type ResultType = {
    followed: boolean
    id: number
    name: string
    photos: { large: null | string, small: null | string }
    status: null | string
    uniqueUrlName: null | string
}

let initialState = {
    users: [] as ResultType[],
    page: 1,
    size: 5,
    totalCount: 0,
    isLoading: false,
    followingButtonDisabled: [] as number[]
}


export const usersReducer = (state: InitialUsersType = initialState, action: ActionType): InitialUsersType => {
    switch (action.type) {
        case "MAKE-FRIENDS":
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: true} : el)
            }
        case "DELETE-FROM-FRIENDS":
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userID ? {...el, followed: false} : el)
            }
        case "SET-USERS":
            return {...state, users: action.payload.users}
        case 'SET-CURRENT-PAGE':
            return {...state, page: action.payload.page}
        case "SET-TOTAL-COUNT":
            return {...state, totalCount: action.payload.count}
        case "SET-IS-LOADING":
            return {...state, isLoading: action.payload.isLoding}
        case "FOLLOWING-BUTTON-DISABLED":
            if (action.payload.value) {
                return {...state, followingButtonDisabled: [...state.followingButtonDisabled, action.payload.userID]}
            } else return {
                ...state,
                followingButtonDisabled: state.followingButtonDisabled.filter(el => el !== action.payload.userID)
            }

        default:
            return state
    }
}

export type makeFriendsAT = ReturnType<typeof makeFriends>
export const makeFriends = (userID: number) => ({type: 'MAKE-FRIENDS', payload: {userID}} as const)


export type deleteFromFriendsAT = ReturnType<typeof deleteFromFriends>
export const deleteFromFriends = (userID: number) => ({type: 'DELETE-FROM-FRIENDS', payload: {userID}} as const)


export type setUsersAT = ReturnType<typeof setUsers>
export const setUsers = (users: ResultType[]) => ({type: 'SET-USERS', payload: {users}} as const)

export type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (page: number) => ({type: 'SET-CURRENT-PAGE', payload: {page}} as const)


export type SetTotalUsersAT = ReturnType<typeof setTotalUsers>
export const setTotalUsers = (count: number) => ({type: 'SET-TOTAL-COUNT', payload: {count}} as const)

export type SetIsLoadingAT = ReturnType<typeof setIsLoading>
export const setIsLoading = (isLoding: boolean) => ({type: 'SET-IS-LOADING', payload: {isLoding}} as const)


type IsFollowingButtonDisabledAT = ReturnType<typeof isFollowingButtonDisabled>
export const isFollowingButtonDisabled = (userID: number, value: boolean) => ({
    type: 'FOLLOWING-BUTTON-DISABLED',
    payload: {userID, value}
} as const)



export const getUsersThunk = (page: number, size: number) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentPage(page))
    try {
        let res = await usersAPI.getUsers(page, size)
        dispatch(setUsers(res.items))
        dispatch(setTotalUsers(res.totalCount))
    } catch (e) {
        console.log(e)
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const onFollowThunk = (el: ResultType) => async (dispatch: AppDispatch) => {
    dispatch(isFollowingButtonDisabled(el.id, true))
    try {
        let res =  await usersAPI.followUsers(el.id)
        if (res.resultCode === 0 ) {
            dispatch(makeFriends(el.id))
            dispatch(setFriends(el))
        }
    }
    catch (e) {console.log(e)}
    finally {
        dispatch(isFollowingButtonDisabled(el.id, false))
    }
}

export const onUnfollowThunk = (el: ResultType) => async (dispatch: AppDispatch) => {
    dispatch(isFollowingButtonDisabled(el.id, true))
    try {
        let res =  await usersAPI.unfollowUsers(el.id)
        if (res.resultCode === 0 ) {
            dispatch(deleteFromFriends(el.id))
            dispatch(deleteFriend(el.id))
        }
    }
    catch (e) {console.log(e)}
    finally {
        dispatch(isFollowingButtonDisabled(el.id, false))
    }
}

