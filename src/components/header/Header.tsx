import React from 'react';
import classes from './Header.module.css'
import fav from './../../images/favicon1.svg'
import {NavLink} from "react-router-dom";
import {HeaderPT} from "./HeaderContainer";


const Header = (props: HeaderPT) => {
    console.log(props.login)
    return (
        <header className={classes.header}>
            <div className={classes.headerContent}>
                <img src={fav}/>
                <h3>Social samurai</h3>
                {props.isAuth?
                    <span className={classes.name}>{props.login}</span> :
                <div className={classes.login}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>}
            </div>

        </header>
    );
};

export default Header;