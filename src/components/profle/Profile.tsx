import React from 'react';
import './Profile.module.css'
import ProfileInfo from "./profileinfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {ProfileResponceType} from "../../redux/profileReducer";

export type ProfilePT = {
    profile: ProfileResponceType
    setProfileInfo: (profile: ProfileResponceType) => void
}

const Profile = (props: ProfilePT) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} setProfileInfo={props.setProfileInfo}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;