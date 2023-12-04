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
    //isAuth: boolean
}
type MapDispatchDialogsPT = {
    sendMessage: () => void,
    updateNewMessageText: (text: string) => void
}
let mapState = (state: RootState): MapStateDialogsPT => {
    return {
        dialogs: state.dialogs,
        //isAuth: state.auth.isAuth
    }
}

export type DialogsPT = MapStateDialogsPT & MapDispatchDialogsPT
//
// let WrappedDialogs = WithAuthRedirect(Dialogs)
// export default connect(mapState, {sendMessage, updateNewMessageText})(WrappedDialogs);



export default compose<React.ComponentType>(WithAuthRedirect, connect(mapState, {sendMessage, updateNewMessageText})) (Dialogs)
