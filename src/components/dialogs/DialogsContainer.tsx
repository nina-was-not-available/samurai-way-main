import React, {ChangeEvent, FC} from 'react';
import {sendMessageAC, updateNewMessageTextAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {ActionType, StatePropsType} from "../../redux/types";
import {RootState} from "../../redux/reduxStore";

//props: DialogsContainerProps
// const DialogsContainer = () => {
//
//     // const onSendClick = () => {
//     //     props.dispatch(sendMessageAC())
//     // }
//     // const onNewMessageChange = (text: string) => {
//     //     props.dispatch(updateNewMessageTextAC(text))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const onSendClick = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//                 const onNewMessageChange = (text: string) => {
//                     store.dispatch(updateNewMessageTextAC(text))
//                 }
//                 return (
//                     <Dialogs dialogs={store.getState().dialogs} sendMessage={onSendClick} updateNewMessageText={onNewMessageChange}/>
//                 )
//             }}
//             {/*<Dialogs dialogs={props.dialogs} sendMessage={onSendClick} updateNewMessageText={onNewMessageChange}/>*/}
//         </StoreContext.Consumer>
//     );
// };

let mapState = (state: RootState) => {
    return {
        dialogs: state.dialogs
    }
}
let mapDispatch = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

const DialogsContainer = connect(mapState, mapDispatch)(Dialogs);


export default DialogsContainer;