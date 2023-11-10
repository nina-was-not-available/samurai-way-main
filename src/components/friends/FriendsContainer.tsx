import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import Friends from "./Friends";


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

const mapState = (state: RootState) => {
    return {
        friends: state.friends
    }
}
const mapDispatch = () => {

}
const FriendsContainer = connect(mapState, mapDispatch)(Friends)
export default FriendsContainer;