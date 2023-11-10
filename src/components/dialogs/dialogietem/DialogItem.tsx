
import {NavLink} from "react-router-dom";
import React from "react";
import classes from './../Dialogs.module.css'


type DialogPropsType = {
    name: string
    id: number
}

export const DialigItem = (props: DialogPropsType) => {

    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    );
};