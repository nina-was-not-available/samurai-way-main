import classes from "../components/navbar/Navbar.module.css";
export type InitialStateNavbarPT = typeof initialState
export type NavbarType = {
    link: string
    text: string
    class: string
}

let initialState = {
    navbarData: [
        {link: '/profile', text: 'Profile', class: classes.item},
        {link: '/dialogs', text: 'Dialogs', class: classes.item},
        {link: '/news', text: 'News', class: classes.item},
        {link: '/music', text: 'Music', class: `${classes.item} ${classes.active}`},
        {link: '/settings', text: 'Settings', class: classes.item},
        {link: '/friends', text: 'Friends', class: classes.item},
        {link: '/users', text: 'Users', class: classes.item},
    ] as NavbarType[]
}

export const sidebarReducer = (state: InitialStateNavbarPT = initialState, action: any) : InitialStateNavbarPT=> {
    return state
}