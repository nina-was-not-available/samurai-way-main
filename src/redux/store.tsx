 import React from "react";
// import classes from "../components/navbar/Navbar.module.css";
// import stacy from "../images/Stacy.webp";
// import phineas from "../images/Phineas.webp";
// import ferb from "../images/Ferb.webp";
// import candace from "../images/Candace.webp";
// import {ActionType, PostType} from "./types";
// import {v1} from "uuid";
// import {profileReducer} from "./profileReducer";
// import dialogs from "../components/dialogs/Dialogs";
// import {dialogsReducer} from "./dialogsReducer";
//
//
// export let store = {
//     _state: {
//         profile: {
//             postsData: [
//                 {id: 1, text: 'My first post!', button: 'like'},
//                 {id: 2, text: 'My second post!', button: 'dislike'},
//             ],
//             newPostText: ''
//         },
//         dialogs: {
//             dialogData: [
//                 {id: 1, name: 'Nikita'},
//                 {id: 2, name: 'Violetta'},
//                 {id: 3, name: 'Kirill'},
//                 {id: 4, name: 'Vlad'},
//                 {id: 5, name: 'Polina'},
//                 {id: 6, name: 'Luba'},
//                 {id: 7, name: 'Andrey'},
//             ],
//             messageData: [
//                 {id: 1, text: 'Hello!'},
//                 {id: 2, text: 'How are you?'},
//                 {id: 3, text: "Let's go out today!"},
//             ],
//             newMessageText: ''
//         },
//         sidebar: {
//             navbarData: [
//                 {link: '/profile', text: 'Profile', class: classes.item},
//                 {link: '/dialogs', text: 'Dialogs', class: classes.item},
//                 {link: '/news', text: 'News', class: classes.item},
//                 {link: '/music', text: 'Music', class: `${classes.item} ${classes.active}`},
//                 {link: '/settings', text: 'Settings', class: classes.item},
//                 {link: '/friends', text: 'Friends', class: classes.item},
//             ],
//         },
//         friends: {
//             friendsData: [
//                 {img: stacy, name: 'Violetta', lastname: 'Kolosova'},
//                 {img: phineas, name: 'Andrey', lastname: 'Savitsky'},
//                 {img: ferb, name: 'Kirill', lastname: 'Ozornin'},
//                 {img: candace, name: 'Luba', lastname: 'Matskevich'},
//             ]
//         }
//     },
//     _callSubscriber(state: StatePropsType) {
//         console.log('hello' + state)
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: StatePropsType) => void) {
//         this._callSubscriber = observer
//     },
//     _addPost() {
//         let newPost: PostType = {id: new Date().getTime(), text: this._state.profile.newPostText, button: 'like'}
//         this._state.profile.postsData.push(newPost)
//         this._state.profile.newPostText = ''
//         this._callSubscriber(this._state)
//     },
//     _updateNewPostText(newText: string) {
//         this._state.profile.newPostText = newText
//         this._callSubscriber(this._state)
//     },
//     dispatch(action: ActionType) {
//         profileReducer(this._state.profile, action)
//         dialogsReducer(this._state.dialogs, action)
//         this._callSubscriber(this._state)
//
//     }
// }



// export let state: StatePropsType = {
//     profile: {
//         postsData: [
//             {id: 1, text: 'My first post!', button: 'like'},
//             {id: 2, text: 'My second post!', button: 'dislike'},
//         ],
//         newPostText: ''
//     },
//     dialogs: {
//         dialogData: [
//             {id: 1, name: 'Nikita'},
//             {id: 2, name: 'Violetta'},
//             {id: 3, name: 'Kirill'},
//             {id: 4, name: 'Vlad'},
//             {id: 5, name: 'Polina'},
//             {id: 6, name: 'Luba'},
//             {id: 7, name: 'Andrey'},
//         ],
//         messageData: [
//             {id: 1, text: 'Hello!'},
//             {id: 2, text: 'How are you?'},
//             {id: 3, text: "Let's go out today!"},
//         ],
//     },
//     sidebar: {
//         navbarData: [
//             {link: '/profile', text: 'Profile', class: classes.item},
//             {link: '/dialogs', text: 'Dialogs', class: classes.item},
//             {link: '/news', text: 'News', class: classes.item},
//             {link: '/music', text: 'Music', class: `${classes.item} ${classes.active}`},
//             {link: '/settings', text: 'Settings', class: classes.item},
//             {link: '/friends', text: 'Friends', class: classes.item},
//         ],
//     },
//     friends: {
//         friendsData: [
//             {img: stacy, name: 'Violetta', lastname: 'Kolosova'},
//             {img: phineas, name: 'Andrey', lastname: 'Savitsky'},
//             {img: ferb, name: 'Kirill', lastname: 'Ozornin'},
//             {img: candace, name: 'Luba', lastname: 'Matskevich'},
//         ]
//     }
// }
//
// export const addPost = () => {
//     let newPost: PostType = {id: new Date().getTime(), text: state.profile.newPostText, button: 'like'}
//     state.profile.postsData.push(newPost)
//     state.profile.newPostText = ''
//     Rerender(state)
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profile.newPostText = newText
//     Rerender(state)
// }
//
// export const subscribe = (observer: (state: StatePropsType) => void) => {
//     Rerender = observer
// }
// let Rerender = (state: StatePropsType) => {
//
// }


// switch (action.type) {
// case 'ADD-POST':
//     // let newPost: PostType = {id: new Date().getTime(), text: this._state.profile.newPostText, button: 'like'}
//     // this._state.profile.postsData.push(newPost)
//     // this._state.profile.newPostText = ''
//     // this._callSubscriber(this._state)
//     this._addPost()
//     break
// case 'UPDATE-NEW-POST-TEXT':
//     // this._state.profile.newPostText = action.newText
//     // this._callSubscriber(this._state)
//     this._updateNewPostText(action.newText)
//     break
// case 'UPDATE-NEW-MESSAGE-TEXT':
//     this._state.dialogs.newMessageText = action.newMessageText
//     this._callSubscriber(this._state)
//     break
// case 'SEND-MESSAGE':
//     let message =  this._state.dialogs.newMessageText
//     this._state.dialogs.newMessageText = ''
//     this._state.dialogs.messageData.push({id: 6, text: message})
//     this._callSubscriber(this._state)
//     break
//}