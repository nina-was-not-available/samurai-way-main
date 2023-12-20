import React from 'react';
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../images/pngwing.com (1).png";
import Button from "../common/Button";
import {ResultType} from "../../redux/usersReducer";

type UserPT = {
    user: ResultType
    onUnfollowClickHandler: (user: ResultType) => void
    onFollowClickHandler: (user: ResultType) => void
    followingButtonDisabled: number[]
}

const User = (props: UserPT) => {
    const {user, onUnfollowClickHandler, onFollowClickHandler, followingButtonDisabled} = props
    return (
        <div>
            <div className={classes.friend}>
                    <span className={classes.friendAvatar}>
                        <div>
                            <NavLink to={'/profile/' + user.id}><img
                                src={user.photos.small === null ? avatar : user.photos.small}
                                className={classes.friendPhoto}/></NavLink>
                        </div>
                        <div>

                            {user.followed ?
                                <Button onClick={() => onUnfollowClickHandler(user)}
                                        name={'unfollow'}
                                        disabled={followingButtonDisabled.some(id => id === user.id)}/>

                                : <Button onClick={() => onFollowClickHandler(user)}
                                          name={'follow'}
                                          style={{backgroundColor: '#d9314c'}}
                                          disabled={followingButtonDisabled.some(id => id === user.id)}/>

                            }
                        </div>
                    </span>
                    <div className={classes.friendDescription}>
                        <div className={classes.name}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                </div>
            )
        </div>
    );
};

export default User;