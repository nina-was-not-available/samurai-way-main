import {
    addPost,
    PostType,
    ProfileResponceType,
    updateStatusThunk
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/reduxStore";



type MapStateProfilePT = {
    postsData: PostType[],
    profile: ProfileResponceType,
    status: string
}
type MapDispatchProfilePT = {
    addPost: (post: string) => void,
    updateStatusThunk: (status: string) => Promise<void>
}

export type MyPostPT = MapStateProfilePT & MapDispatchProfilePT

const mapState = (state: RootState): MapStateProfilePT => {
    return {
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profileInfo,
        status: state.profilePage.status
    }
}


const MyPostsContainer = connect(mapState, {addPost,  updateStatusThunk})(MyPosts)

export default MyPostsContainer;