import classes from "../components/navbar/Navbar.module.css";
import {SideBarPropsType} from "./types";

let initialState = {
    navbarData: [
        {link: '/profile', text: 'Profile', class: classes.item},
        {link: '/dialogs', text: 'Dialogs', class: classes.item},
        {link: '/news', text: 'News', class: classes.item},
        {link: '/music', text: 'Music', class: `${classes.item} ${classes.active}`},
        {link: '/settings', text: 'Settings', class: classes.item},
        {link: '/friends', text: 'Friends', class: classes.item},
    ]
}

export const sidebarReducer = (state: SideBarPropsType = initialState, action: any) => {
    return state
}