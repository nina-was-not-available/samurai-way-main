import classes from "../components/navbar/Navbar.module.css";
import stacy from "../images/Stacy.webp";
import phineas from "../images/Phineas.webp";
import ferb from "../images/Ferb.webp";
import candace from "../images/Candace.webp";
// export type FriendPropsType = {
//     img: string,
//     name: string,
//     lastname: string,
// }

export type ResultType = {
    followed: boolean
    id: number
    name: string
    photos: {large: null | string, small: null | string}
    status: null | string
    uniqueUrlName: null | string
}

export type InitialStateFriendsPT = typeof initialState

let initialState = {
    // friendsData: [
    //     {img: stacy, name: 'Violetta', lastname: 'Kolosova'},
    //     {img: phineas, name: 'Andrey', lastname: 'Savitsky'},
    //     {img: ferb, name: 'Kirill', lastname: 'Ozornin'},
    //     {img: candace, name: 'Luba', lastname: 'Matskevich'},
    // ] as FriendPropsType[]
    friendsData: [] as ResultType[]
}

export const friendsReducer =  (state: InitialStateFriendsPT = initialState, action: ActionFriendsType) : InitialStateFriendsPT => {
    switch (action.type) {
        case "SET-FRIENDS":
            return {...state, friendsData: [...state.friendsData, action.payload.friend]}
        case "DELETE-FROM-FRIEND":
            return {...state, friendsData: state.friendsData.filter(el => el.id !== action.payload.friendID)}
        default: return  state
    }
}

export const setFriends = (friend: ResultType) => {
    return {
        type: 'SET-FRIENDS',
        payload: {friend}
    } as const
}
type setFriendsAT = ReturnType<typeof setFriends>

export const deleteFriend = (friendID: number) => {
    return {
        type: 'DELETE-FROM-FRIEND',
        payload: {
            friendID
        }
    }as const
}
type deleteFriendAT = ReturnType<typeof deleteFriend>
type ActionFriendsType = setFriendsAT | deleteFriendAT