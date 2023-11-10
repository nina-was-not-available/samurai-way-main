import React from 'react';
import Friend from "./friend/Friend";
import classes from './Friends.module.css'
import {FriendsPropsType, FriendType} from "../../redux/types";


//props: FriendType

const Friends = (props: FriendType) => {
    const {friendsData} = props.friends
    const friendsList = friendsData.map((f, index) => <Friend key={index} img={f.img} name={f.name} lastname={f.lastname}/>)
    return (
        <div className={classes.friends}>
            {friendsList}
        </div>
    );
};

export default Friends;