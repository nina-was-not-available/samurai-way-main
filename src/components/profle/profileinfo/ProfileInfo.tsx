import React from 'react';
import classes from './ProfileInfo.module.css'
import ava from "../../../images/инфочат.jpg";
import Preloader from "../../common/Preloader";
import avatar from './../../../images/pngwing.com (1).png'
import mainimg from './../../../images/pngwing.com (4).png'
import {ProfilePT} from "../Profile";
import EditableSpan from "../../common/EditableSpan";
import {ProfileResponceType} from "../../../redux/profileReducer";
import {Redirect} from "react-router-dom";

type ProfileInfoPT = {
    profile: ProfileResponceType
    setProfileInfo: (profile: ProfileResponceType) => void
}

export const ProfileInfo = (props: ProfileInfoPT) => {
    if (!props.profile.photos) {
         return <Preloader/>
        // return <Redirect to={'/login'}/>
    }
    return (
        <>
            {/*<div><img className={classes.fon}*/}
            {/*    // src={'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg'}*/}
            {/*    src={mainimg}*/}
            {/*/></div>*/}
            <div className={classes.profileHeader}>
                <img src={props.profile.photos.large? props.profile.photos.large : avatar}/>
                <div className={classes.description}>
                    <div>Name: {props.profile.fullName}</div>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>Looking for a job:
                        <input type={'checkbox'} checked={props.profile.lookingForAJob}/>
                        <span> {props.profile.lookingForAJobDescription}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;