import profileInfo from "../components/profle/profileinfo/ProfileInfo";
import {getProfile} from "../api/profileAPI";
import {AppDispatch} from "./reduxStore";

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
    userId: number
}

export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
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
    aboutMe: 'Hello!',
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
    fullName:'Nina Matushkina',
    lookingForAJob: true,
    lookingForAJobDescription: 'just for fun',
    photos: { small: null , large: null },
    userId: 1
}

export let initialState = {
    postsData: [
        {id: 1, text: 'My first post!', button: 'like'},
        {id: 2, text: 'My second post!', button: 'dislike'},
    ] as PostType[],
    newPostText: '',
    profileInfo: initialProfileInfo as ProfileResponceType
}

export type InitialStateProfilePT = typeof initialState

export const profileReducer = (state: InitialStateProfilePT = initialState, action: ActionType): InitialStateProfilePT => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {id: new Date().getTime(), text: state.newPostText, button: 'like'}
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}


        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        case "SET-PROFILE-INFO":
            return {...state, profileInfo: action.payload.profile}
        case "UPDATE-PROFILE":
            return{...state, profileInfo: initialState.profileInfo}
    }
    return state
}

export type AddPostAT = {
    type: 'ADD-POST'
}
export type UpdateNewPostMessageAT = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
type setProfileInfoAT = ReturnType<typeof setProfileInfo>
export const setProfileInfo = (profile: ProfileResponceType) => {
    return {
        type: 'SET-PROFILE-INFO',
        payload: {profile}
    } as const
}
type UpdateProfileAT = ReturnType<typeof updateProfile>
export const updateProfile = () => {
    return {
        type: 'UPDATE-PROFILE',
    } as const
}

type ActionType = AddPostAT | UpdateNewPostMessageAT | setProfileInfoAT | UpdateProfileAT

export const getProfileThunk = (userId: string) => async (dispatch: AppDispatch) => {
    // getProfile(userId)
    //     .then(response => this.props.setProfileInfo(response))
    //     .catch(() => {
    //         return this.props.setProfileInfo(initialProfileInfo)
    //     })
    try {
        let res = await  getProfile(userId)
        dispatch(setProfileInfo(res))
    }
    catch (e) {
        dispatch(setProfileInfo(initialProfileInfo))
    }
}