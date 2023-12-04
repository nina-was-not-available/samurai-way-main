import React from 'react';
import classes from "./Users.module.css";
import {ResultType} from "../../redux/usersReducer";
import Preloader from "../common/Preloader";
import {NavLink} from "react-router-dom";
import avatar from './../../images/pngwing.com (1).png'
import Button from "../common/Button";
import {usersAPI} from "../../api/usersApi";


type UsersType = {
    totalCount: number
    size: number
    page: number
    onPageChanged: (page: number) => void
    users: ResultType[]
    isLoading: boolean
    onFollowClickHandler: (el: ResultType) => void
    onUnfollowClickHandler: (el: ResultType) => void
    followingButtonDisabled: number[]
}
export const Users = (props: UsersType) => {
    let pagesCount = Math.ceil(props.totalCount / props.size)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.isLoading && <Preloader/>}
            <div className={classes.paginationContainer}>
                <div className={classes.pagination}>
                    {pages.map(el => {
                        return <span className={props.page === el ? classes.selected : ''}
                                     onClick={() => props.onPageChanged(el)} style={{cursor: 'pointer'}} key={el}
                        >{el}</span>
                    })}
                </div>
            </div>
            {props.users.map(el => <div key={el.id} className={classes.friend}>
                    <span className={classes.friendAvatar}>
                        <div>
                            <NavLink to={'/profile/' + el.id}><img
                                src={el.photos.small === null ? avatar : el.photos.small}
                                className={classes.friendPhoto}/></NavLink>
                        </div>
                        <div>

                            {el.followed ?
                                <Button onClick={() => props.onUnfollowClickHandler(el)}
                                        name={'unfollow'}
                                disabled={props.followingButtonDisabled.some(id => id === el.id)}/>

                                : <Button onClick={() => props.onFollowClickHandler(el)}
                                          name={'follow'}
                                          style={{backgroundColor: '#d9314c'}}
                                disabled={props.followingButtonDisabled.some(id => id === el.id)}/>

                            }
                        </div>
                    </span>
                    <div className={classes.friendDescription}>
                        <div className={classes.name}>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

