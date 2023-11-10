import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    friends: friendsReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export let store = createStore(rootReducer)
export type StoreType = typeof store