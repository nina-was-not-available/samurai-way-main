import {AppThunk} from "./reduxStore";
import {getAuthInfoThunk} from "./authReducer";

const initAppState = {
    initialized: false
}
type InitAppStateType = typeof initAppState
export const appReducer = (state: InitAppStateType = initAppState, action: AppActionTypes): InitAppStateType => {
    switch (action.type) {
        case "SET-INITIALISING":
            return {...state, initialized: true}
        default:
            return state
    }
}
type AppActionTypes = ReturnType<typeof setInitialisingAC>
const setInitialisingAC = () => ({type: 'SET-INITIALISING'} as const)

export const setInitialisingTC = (): AppThunk => dispatch => {
    dispatch(getAuthInfoThunk())
        .then(() => dispatch(setInitialisingAC()))
}