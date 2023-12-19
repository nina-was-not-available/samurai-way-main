import {
    InitialStateDialogsPT, sendMessage,
    updateNewMessageText,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/reduxStore";
import {WithAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateDialogsPT = {
    dialogs: InitialStateDialogsPT

}
type MapDispatchDialogsPT = {
    sendMessage: (message: string) => void,
}
let mapState = (state: RootState): MapStateDialogsPT => {
    return {
        dialogs: state.dialogs,

    }
}

export type DialogsPT = MapStateDialogsPT & MapDispatchDialogsPT

export default compose<React.ComponentType>(WithAuthRedirect, connect(mapState, {sendMessage})) (Dialogs)
