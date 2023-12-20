import React from 'react';
import {ResultType} from "../../redux/usersReducer";
import Preloader from "../common/Preloader";
import Pagination from "../common/Pagination";
import User from "./User";


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
    return (
        <div>
            {props.isLoading && <Preloader/>}
            <Pagination totalCount={props.totalCount} size={props.size} page={props.page}
                        onPageChanged={props.onPageChanged}/>
            {props.users.map(el => <User user={el} onUnfollowClickHandler={props.onUnfollowClickHandler}
                                         onFollowClickHandler={props.onFollowClickHandler}
                                         followingButtonDisabled={props.followingButtonDisabled} key={el.id}/>
            )}
        </div>
    )
}

