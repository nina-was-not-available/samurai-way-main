
export type DialogsType = {
    id: number
    name: string

}
export type MessageData = {
    id: number
    text: string

}

export const updateNewMessageText = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessageText
    } as const
}

export const sendMessage = (message: string) => {
    return {
        type: 'SEND-MESSAGE',
        payload: {message}
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
    ] as DialogsType[],
    messageData: [
        {id: 1, text: 'Hello!'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: "Let's go out today!"},
    ] as MessageData[],
}

export type InitialStateDialogsPT = typeof initialState
export const dialogsReducer = (state: InitialStateDialogsPT = initialState, action: ActionType) : InitialStateDialogsPT => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            return {...state, messageData: [...state.messageData, {id: 6, text: action.payload.message}]}
    }
    return state
}

export  type sendMessageAT = ReturnType<typeof sendMessage>

type ActionType = sendMessageAT