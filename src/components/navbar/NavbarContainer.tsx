import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "../friends/Friends";
import {FriendsPropsType, NavbarPropsType, SideBarPropsType} from "../../redux/types";
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {RootState} from "../../redux/reduxStore";




// const NavbarContainer = (props: NavbarPropsType) => {
//     const {navbarData} = props.sidebar
//     let navbar = navbarData.map((nav, index) => {
//         return (
//             <div className={nav.class} key={index}>
//                 <NavLink to={nav.link} activeClassName={classes.active}>{nav.text}</NavLink>
//             </div>
//         )
//     })
//     return (
//         <nav className={classes.nav}>
//             {navbar}
//
//         </nav>
//     );
// };

const mapState = (state: RootState) => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatch = () => {
}

const NavbarContainer = connect(mapState, mapDispatch)(Navbar)

export default NavbarContainer;