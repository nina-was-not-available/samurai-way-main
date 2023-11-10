import React from 'react';
import './Profile.module.css'
import classes from "./Profile.module.css";
import MyPosts from "./myPosts/MyPosts";
import ava from './../../images/инфочат.jpg'
import ProfileInfo from "./profileinfo/ProfileInfo";

import MyPostsContainer from "./myPosts/MyPostsContainer";


//props: ProfileProps
//props: ProfileProps

const Profile = () => {

    //const {postsData, newPostText} = props.profile
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;