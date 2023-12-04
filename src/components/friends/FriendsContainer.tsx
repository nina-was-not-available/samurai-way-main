import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import Friends from "./Friends";
import {InitialStateFriendsPT, ResultType, setFriends} from "../../redux/friendsReducer";
import React, {ReactComponentElement} from "react";
import axios from "axios";
import friend from "./friend/Friend";
import friends from "./Friends";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


//props: FriendType

// const Friends = (props: FriendType) => {
//     const {friendsData} = props.friends
//     const friendsList = friendsData.map((f, index) => <Friend key={index} img={f.img} name={f.name} lastname={f.lastname}/>)
//     return (
//         <div className={classes.friends}>
//             {friendsList}
//         </div>
//     );
// };


class FriendsContainer extends React.Component<FriendsPT> {

    render() {
        //if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Friends friends={this.props.friends}/>
        );
    }
}

export type MapStateFriendsPT = {
     friends: InitialStateFriendsPT
   // isAuth: boolean
    // friends: ResultType[]
}
type MapDispatchFriendsPT = {
    setFriends: (friends: ResultType) => void
}
export type FriendsPT = MapStateFriendsPT & MapDispatchFriendsPT
const mapState = (state: RootState): MapStateFriendsPT => {
    return {
        friends: state.friends,
       // isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(WithAuthRedirect,
    connect(mapState, {setFriends})
)(FriendsContainer)
// let WrappedFriends = WithAuthRedirect(FriendsContainer)
// export default connect(mapState, {setFriends})(WrappedFriends);