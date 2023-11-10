import React from 'react';
import classes from './ProfileInfo.module.css'
import ava from "../../../images/инфочат.jpg";

export const ProfileInfo = () => {
    return (
        <>
            <div><img className={classes.fon}
                      src={'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg'}/></div>
            <div className={classes.profileHeader}>
                <img src={ava}/>
            </div>
        </>
    );
};

export default ProfileInfo;