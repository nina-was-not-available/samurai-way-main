import {ActionType, DialogsProps, DialogsPropsType, DialogsType} from "./types";

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}

let initialState = {
    dialogData: [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Violetta'},
        {id: 3, name: 'Kirill'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Polina'},
        {id: 6, name: 'Luba'},
        {id: 7, name: 'Andrey'},
    ],
    messageData: [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: "Let's go out today!"},
    ],
    newMessageText: ''
}
export const dialogsReducer = (state: DialogsPropsType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            // state.newMessageText = action.newMessageText
            // return state
        return {...state, newMessageText: action.newMessageText}


        case 'SEND-MESSAGE':
            // let message = state.newMessageText
            // state.newMessageText = ''
            // state.messageData.push({id: 6, text: message})
            //return state
            return {...state, messageData: [...state.messageData, {id: 6, text: state.newMessageText}], newMessageText: ''}
    }
    return state
}