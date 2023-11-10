import {store} from "./reduxStore";
import {ChangeEvent} from "react";


export type DialogsPropsType = {
    dialogData: DialogsType[]
    messageData: MessageData[]
    newMessageText: string
}


export type DialogsType = {
    id: number
    name: string

}
export type MessageData = {
    id: number
    text: string

}

export type DialogsProps = {
    dialogs: DialogsPropsType,
    sendMessage: () => void,
    updateNewMessageText: (text: string) => void// dispatch: (action: ActionType) => void
}
export type DialogsContainerProps = {
    dialogs: DialogsPropsType,
     dispatch: (action: ActionType) => void
}

export type ProfileProps = {
    profile: ProfilePropsType,
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionType) => void

}

export type ProfilePropsType = {
    postsData: PostType[],
    newPostText: string
}
export type PostsPropsType = {
    postsData: PostType[]
    //profile: ProfilePropsType
     addPost: () => void
   newPostText: string
    //dispatch: (action: ActionType) => void
    updateNewPostText: (newText: string) => void
}
export type PostsContainerPropsType = {
    postsData: PostType[]
    // addPost: () => void
    newPostText: string
    dispatch: (action: ActionType) => void
    // updateNewPostText: (newText: string) => void
}


export type PostType = {
    id: number
    text: string
    button: string
    likeCount?: string
}

export type SideBarPropsType = {
    navbarData: NavbarType[]
}


export type NavbarType = {
    link: string
    text: string
    class: string
}

export type NavbarPropsType = {
    sidebar: SideBarPropsType

}

export type FriendPropsType = {
    img: string,
    name: string,
    lastname: string,
}

export type FriendsPropsType = {
    friendsData: FriendsDataPropsType[]
}

export type FriendsDataPropsType = {
    img: string,
    name: string,
    lastname: string,
}
export type FriendType = {
    friends: FriendsPropsType
}

export type StatePropsType = {
    profile: ProfilePropsType
    dialogs: DialogsPropsType
    sidebar: SideBarPropsType
    friends: FriendsPropsType
}

// export type AppPropsType = {
//     //state: StatePropsType
//     state: ReturnType<typeof store.getState>
//     // addPost: () => void
//     // updateNewPostText:(newText: string) => void
//     dispatch: (action: ActionType) => void
// }

export type AddPostAT = {
    type:'ADD-POST'
}
export type UpdateNewPostMessageAT = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
export type updateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: string
}

export  type sendMessageAT = {
    type: 'SEND-MESSAGE'
}
export type ActionType = AddPostAT | UpdateNewPostMessageAT | updateNewMessageTextAT | sendMessageAT