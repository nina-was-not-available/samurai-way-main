import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export let store = createStore(rootReducer, applyMiddleware(thunk))
export type StoreType = typeof store


export type AppDispatch = ThunkDispatch<RootState, unknown,AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>