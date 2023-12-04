import React from 'react';
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {MapStateNavbarPT, NavbarPT} from "./NavbarContainer";




const Navbar = (props: NavbarPT) => {
    const {navbarData} = props.sidebar
    let navbar = navbarData.map((nav, index) => {
        return (
            <div className={nav.class} key={index}>
                <NavLink to={nav.link} activeClassName={classes.active} onClick={props.updateProfile}>{nav.text}</NavLink>
            </div>
        )
    })
    return (
        <nav className={classes.nav}>
            {navbar}

        </nav>
    );
};

export default Navbar;