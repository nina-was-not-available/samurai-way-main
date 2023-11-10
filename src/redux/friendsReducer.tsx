import classes from "../components/navbar/Navbar.module.css";
import stacy from "../images/Stacy.webp";
import phineas from "../images/Phineas.webp";
import ferb from "../images/Ferb.webp";
import candace from "../images/Candace.webp";

let initialState = {
    friendsData: [
        {img: stacy, name: 'Violetta', lastname: 'Kolosova'},
        {img: phineas, name: 'Andrey', lastname: 'Savitsky'},
        {img: ferb, name: 'Kirill', lastname: 'Ozornin'},
        {img: candace, name: 'Luba', lastname: 'Matskevich'},
    ]
}

export const friendsReducer =  (state: any = initialState, action: any) => {
    return state
}