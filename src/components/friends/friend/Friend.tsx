import React from 'react';
import classes from './Friend.module.css'
import avatar from './../../../images/pngwing.com (1).png'

type FrirndType = {
    img: null | string
    name: null | string
    status: null | string
}

const Friend = (props: FrirndType) => {
    return (
        <div>
            <div className={classes.container}>
                <img src={props.img? props.img : avatar} className={classes.ava}/>
                {/*<span className={classes.online}></span>*/}
                <span className={classes.name}>{props.name}</span>
                <span className={classes.name}>{props.status}</span>
            </div>
        </div>
    );
};

export default Friend;

