import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {friendsReducer} from "./friendsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import {reducer as formReducer} from "redux-form";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {appReducer} from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogs: dialogsReducer,
    sidebar: sidebarReducer,
    friends: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
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