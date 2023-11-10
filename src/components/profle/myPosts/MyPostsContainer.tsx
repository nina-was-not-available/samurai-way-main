import React, {ChangeEvent, useState} from 'react';
import {
    ActionType,
    PostsContainerPropsType,
    PostsPropsType,
    ProfilePropsType,
    StatePropsType
} from "../../../redux/types";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";

//props: PostsContainerPropsType
// export const MyPostsContainer = () => {
//     // const addPost = () => {
//     //     props.dispatch(addPostAC())
//     // }
//     //
//     // const onChangeHandler = (newText: string) => {
//     //     const action = updateNewPostTextAC(newText)
//     //     props.dispatch(action)
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const addPost = () => {
//                     store.dispatch(addPostAC())
//                 }
//
//                 const onChangeHandler = (newText: string) => {
//                     const action = updateNewPostTextAC(newText)
//                     store.dispatch(action)
//                 }
//                 return (
//                     <MyPosts addPost={addPost} updateNewPostText={onChangeHandler} postsData={store.getState().profilePage.postsData}
//                     newPostText={store.getState().profilePage.newPostText}/> )}}
//         </StoreContext.Consumer>
//
//     );
// };
const mapState = (state: RootState) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText

    }
}
const mapDispatch = (dispatch: (action: ActionType) => void) => {

    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            const action = updateNewPostTextAC(newText)
            dispatch(action)
        }
    }
}

const MyPostsContainer = connect(mapState, mapDispatch)(MyPosts)

export default MyPostsContainer;