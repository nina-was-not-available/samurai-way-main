import React from 'react';
import classes from './Header.module.css'


const Header = () => {
    return (
        <header className={classes.header}>
            <img src={'https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg'}/>
        </header>
    );
};

export default Header;