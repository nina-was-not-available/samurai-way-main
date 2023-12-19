import React from 'react';
import './Profile.module.css'
import {connect} from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import {
    getProfileThunk, getStatusThunk,
    initialProfileInfo,
    initialState,
    ProfileResponceType,
    setProfileInfo,
    updateProfile, updateStatusThunk
} from "../../redux/profileReducer";
import {RootState, store} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../common/Preloader";

type PathParamsType = {
    userId: string
}

export type ProfilePType = mapDispatchToProps_T & mapStateToProps_T

type ProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        let myId = '30215'
        if (!userId) {
            if (this.props.myId) {
                userId = this.props.myId.toString()
            }
            else {this.props.history.push('/login')}
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                     setProfileInfo={this.props.setProfileInfo}/>
        //status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
        );
    };
}

type mapDispatchToProps_T = {
    setProfileInfo: (profile: ProfileResponceType) => void
    getProfileThunk: (userId: string) => Promise<void>;
    getStatusThunk: (userId: string) => Promise<void>
    updateStatusThunk: (status: string) => Promise<void>

}
type mapStateToProps_T = {
     profile: ProfileResponceType,
    // status: string
    isAuth: boolean
    myId: number | null
}
const mapStateToProps = (state: RootState): mapStateToProps_T => ({
    profile: state.profilePage.profileInfo,
    // status: state.profilePage.status
    isAuth: state.auth.isAuth,
    myId: state.auth.id
})

export default compose<React.ComponentType>(withRouter,
   // WithAuthRedirect,
    connect(mapStateToProps, {setProfileInfo, getProfileThunk, getStatusThunk, updateStatusThunk})
)(ProfileContainer)
//
// let ProfileContainerWithRouter = withRouter(ProfileContainer)
// let WrapedProfile = WithAuthRedirect(ProfileContainerWithRouter)
// export default connect(mapStateToProps, {setProfileInfo, getProfileThunk})(WrapedProfile);