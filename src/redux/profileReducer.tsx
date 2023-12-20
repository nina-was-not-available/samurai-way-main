import profileInfo from "../components/profle/profileinfo/ProfileInfo";
import {AppDispatch} from "./reduxStore";
import {profileAPI} from "../api/profileAPI";

export type ContactsType = {
    facebook: null | string
    github: null | string
    instagram: null | string
    mainLink: null | string
    twitter: null | string
    vk: null | string
    website: null | string
    youtube: null | string
}

export type ProfileResponceType = {
    aboutMe: null | string
    contacts: ContactsType
    fullName: null | string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    photos: { small: null | string, large: null | string }
    userId: number | null
}

export const addPost = (post: string) => {
    return {
        type: 'ADD-POST',
        payload: {post}
    } as const
}



export type PostType = {
    id: number
    text: string
    button: string
    img?: string
    likeCount?: string
}
export const initialProfileInfo = {
    aboutMe: null,
    contacts: {
        facebook: null ,
        github: null ,
        instagram: null ,
        mainLink: null,
        twitter: null ,
        vk: null ,
        website: null ,
        youtube: null ,
    },
    fullName:null,
    lookingForAJob: true,
    lookingForAJobDescription: null,
    photos: { small: null , large: null },
    userId: null
} as ProfileResponceType

export let initialState = {
    postsData: [
        {id: 1, text: 'My first post!', button: 'like'},
        {id: 2, text: 'My second post!', button: 'dislike'},
    ] as PostType[],
    profileInfo: initialProfileInfo as ProfileResponceType,
    status: ''
}
export type InitialStateProfilePT = {
    postsData:PostType[]
    profileInfo: ProfileResponceType
    status: string
}
// export type InitialStateProfilePT = typeof initialState

export const profileReducer = (state: InitialStateProfilePT = initialState, action: ActionType): InitialStateProfilePT => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {id: new Date().getTime(), text: action.payload.post, button: 'like'}
            return {...state, postsData: [newPost, ...state.postsData]}

        case "SET-PROFILE-INFO":
            return {...state, profileInfo: action.payload.profile}
        case "UPDATE-PROFILE":
            return{...state, profileInfo: initialState.profileInfo}
        case "SET-STATUS":
            return {...state, status: action.payload.status}
        case "DELETE-POST":
            return {...state, postsData: state.postsData.filter(el => el.id !== action.id)}
    }
    return state
}

export type AddPostAT = ReturnType<typeof addPost>

export const setProfileInfo = (profile: ProfileResponceType) => ({type: 'SET-PROFILE-INFO', payload: {profile}} as const)
export const updateProfile = () => ({type: 'UPDATE-PROFILE'} as const)

const setStatus = (status: string) => ({type: 'SET-STATUS', payload: {status}} as const)

export const deletePost = (id: number) => ({type: 'DELETE-POST', id} as const)

type ActionType = AddPostAT
    | ReturnType<typeof setProfileInfo>
    | ReturnType<typeof updateProfile>
    |  ReturnType<typeof setStatus>
    | ReturnType<typeof deletePost>

export const getProfileThunk = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        let res = await profileAPI.getProfile(userId)
        dispatch(setProfileInfo(res))
    }
    catch (e) {
        dispatch(setProfileInfo(initialProfileInfo))
    }
}

export const getStatusThunk = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        let res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res))
    }
    catch (e) {
        dispatch(setStatus(''))
    }
}

export const updateStatusThunk = (status: string) => async (dispatch: AppDispatch) => {
    try {
        let res = await profileAPI.updateStatus(status)
        dispatch(setStatus(status))
    }
    catch (e) {
        dispatch(setStatus('No valid status'))
    }
}