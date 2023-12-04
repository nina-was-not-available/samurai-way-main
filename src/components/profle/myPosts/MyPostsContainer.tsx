import {
    addPost,
    PostType,
    ProfileResponceType,
    updateNewPostText
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";



type MapStateProfilePT = {
    postsData: PostType[],
    newPostText: string,
    profile: ProfileResponceType
}
type MapDispatchProfilePT = {
    addPost: () => void,
    updateNewPostText: (newText: string) => void
}

export type MyPostPT = MapStateProfilePT & MapDispatchProfilePT

const mapState = (state: RootState): MapStateProfilePT => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profileInfo

    }
}


const MyPostsContainer = connect(mapState, {addPost, updateNewPostText})(MyPosts)

export default MyPostsContainer;