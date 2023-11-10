import React from 'react';
import classes from './Friend.module.css'
import {FriendPropsType} from "../../../redux/types";

const Friend = (props: FriendPropsType) => {
    return (
        <div>
            <div className={classes.container}>
                <img src={props.img} className={classes.ava}/>
                {/*<span className={classes.online}></span>*/}
                <span className={classes.name}>{props.name}</span>
                <span className={classes.name}>{props.lastname}</span>
            </div>
        </div>
    );
};

export default Friend;

