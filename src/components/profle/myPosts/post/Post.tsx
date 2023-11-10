import React from 'react';
import classes from './Post.module.css'
import ava from './../../../../images/инфочат.jpg';
import {PostType} from "../../../../redux/types";

export const Post = (props: PostType) => {
    return (
        <div>
            <div className={classes.item}>
                <img src={ava}/>
                <span>{props.text}</span>
                <div>
                    <button>{props.button}</button>
                </div>
            </div>
        </div>
    );
};

export default Post;