import {ActionType, PostType, ProfilePropsType} from "./types";

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

let initialState = {
    postsData: [
        {id: 1, text: 'My first post!', button: 'like'},
        {id: 2, text: 'My second post!', button: 'dislike'},
    ],
    newPostText: ''
}

export const profileReducer =  (state: ProfilePropsType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            // let newPost: PostType = {id: new Date().getTime(), text: state.newPostText, button: 'like'}
            // state.postsData.push(newPost)
            // state.newPostText = ''
            // return state
            let newPost: PostType = {id: new Date().getTime(), text: state.newPostText, button: 'like'}
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}


        case 'UPDATE-NEW-POST-TEXT':
            // state.newPostText = action.newText
            // return state
            return {...state, newPostText: action.newText}
    }
    return state
}