import {connect} from "react-redux";
import {AppDispatch, AppThunk, RootState} from "../../redux/reduxStore";
import {
    deleteFromFriends, getUsersThunk, isFollowingButtonDisabled,
    makeFriends, onFollowThunk, onUnfollowThunk, ResultType, setCurrentPage, setIsLoading, setTotalUsers,
    setUsers,
} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {usersAPI} from "../../api/usersApi";
import {deleteFriend, setFriends} from "../../redux/friendsReducer";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getFollowingButtonDisabled,
    getIsLoading,
    getPage,
    getSize,
    getTotalCount,
    getUsers
} from "../../redux/selectors/usersSelectors";


export type UsersPropsType = MapStateUsersPT & MapDispatchUsersPT
type MapStateUsersPT = {
    users: ResultType[],
    page: number,
    size: number,
    totalCount: number
    isLoading: boolean
    followingButtonDisabled: number[]
}
type MapDispatchUsersPT = {
    setCurrentPage: (page: number) => void
    getUsersThunk: (page: number, size: number) => Promise<void>;
    onFollowThunk: (el: ResultType) => Promise<void>;
    onUnfollowThunk: (el: ResultType) => Promise<void>;
}

// const mapState = (state: RootState): MapStateUsersPT => {
//     return {
//         users: state.usersPage.users,
//         page: state.usersPage.page,
//         size: state.usersPage.size,
//         totalCount: state.usersPage.totalCount,
//         isLoading: state.usersPage.isLoading,
//         followingButtonDisabled: state.usersPage.followingButtonDisabled,
//     }
// }

const mapState = (state: RootState): MapStateUsersPT => {
    return {
        users: getUsers(state),
        page: getPage(state),
        size: getSize(state),
        totalCount: getTotalCount(state),
        isLoading: getIsLoading(state),
        followingButtonDisabled: getFollowingButtonDisabled(state),
    }
}
class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsersThunk(this.props.page, this.props.size)
    }

    onPageChanged = (page: number) => {
        this.props.getUsersThunk(page, this.props.size)
        this.props.setCurrentPage(page)
    }

    render() {
        const onFollowClickHandler = (el: ResultType) => {
            this.props.onFollowThunk(el)
        }

        const onUnfollowClickHandler = (el: ResultType) => {
            this.props.onUnfollowThunk(el)
        }

        return (
            <>
                <Users totalCount={this.props.totalCount} size={this.props.size} page={this.props.page}
                       users={this.props.users} onPageChanged={this.onPageChanged}
                       isLoading={this.props.isLoading}
                       onUnfollowClickHandler={onUnfollowClickHandler} onFollowClickHandler={onFollowClickHandler}
                       followingButtonDisabled={this.props.followingButtonDisabled}
                />
            </>
        )
    }
};

// let WrappedUsers = WithAuthRedirect(UsersContainer)
//
// export default connect(mapState, {
//     setCurrentPage,
//     getUsersThunk,
//     onFollowThunk,
//     onUnfollowThunk
// })(WrappedUsers)
//WithAuthRedirect,

export default compose<React.ComponentType>(connect(mapState, {
    setCurrentPage,
    getUsersThunk,
    onFollowThunk,
    onUnfollowThunk
})) (UsersContainer)