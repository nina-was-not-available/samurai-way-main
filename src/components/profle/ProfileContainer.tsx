import React from 'react';
import './Profile.module.css'
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {
    getProfileThunk,
    initialProfileInfo,
    initialState,
    ProfileResponceType,
    setProfileInfo,
    updateProfile
} from "../../redux/profileReducer";
import {RootState, store} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getProfile} from "../../api/profileAPI";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

export type ProfilePType = mapDispatchToProps_T & mapStateToProps_T

type ProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '1'
        }
        this.props.getProfileThunk(userId)
        // getProfile(userId)
        //     .then(response => this.props.setProfileInfo(response))
        //     .catch(() => {
        //         return this.props.setProfileInfo(initialProfileInfo)
        //     })
    }

    render() {

        //if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile profile={this.props.profile} setProfileInfo={this.props.setProfileInfo}/>
        );
    };
}

type mapDispatchToProps_T = {
    setProfileInfo: (profile: ProfileResponceType) => void
    getProfileThunk: (userId: string) => Promise<void>;

}
type mapStateToProps_T = {
    profile: ProfileResponceType
    //isAuth: boolean
}
const mapStateToProps = (state: RootState): mapStateToProps_T => ({
    profile: state.profilePage.profileInfo,
    //isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(withRouter,
    WithAuthRedirect,
    connect(mapStateToProps, {setProfileInfo, getProfileThunk})
)(ProfileContainer)
//
// let ProfileContainerWithRouter = withRouter(ProfileContainer)
// let WrapedProfile = WithAuthRedirect(ProfileContainerWithRouter)
// export default connect(mapStateToProps, {setProfileInfo, getProfileThunk})(WrapedProfile);