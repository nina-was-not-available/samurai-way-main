import {connect} from "react-redux";
import Navbar from "./Navbar";
import {RootState} from "../../redux/reduxStore";
import {InitialStateNavbarPT} from "../../redux/sidebarReducer";
import {updateProfile} from "../../redux/profileReducer";

export type MapStateNavbarPT = {
    sidebar: InitialStateNavbarPT
}
const mapState = (state: RootState): MapStateNavbarPT => {
    return {
        sidebar: state.sidebar
    }
}
export type NavbarPT = MapDispatchNavbarPT & MapStateNavbarPT
type MapDispatchNavbarPT = {
    updateProfile: () => void
}


export default connect(mapState, {updateProfile})(Navbar)

