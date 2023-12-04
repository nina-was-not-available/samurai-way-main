import React from 'react';
import Friend from "./friend/Friend";
import classes from './Friends.module.css'
import {FriendsPT, MapStateFriendsPT} from "./FriendsContainer";
import Preloader from "../common/Preloader";
import {InitialStateFriendsPT} from "../../redux/friendsReducer";


type FriendPT = {
    friends: InitialStateFriendsPT
}
//props: FriendType

const Friends = (props: FriendPT) => {
    if (props.friends.friendsData.length === 0) {
        return <div></div>
    }
    const {friendsData} = props.friends
    const friendsList = friendsData.map((f, index) => <Friend key={index} img={f.photos.large} name={f.name} status={f.status}/>)
    return (
        <div className={classes.friends}>
            {friendsList}
        </div>
    );
};

export default Friends;