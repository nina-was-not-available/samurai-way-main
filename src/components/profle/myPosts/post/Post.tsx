import React from 'react';
import classes from './Post.module.css'
import like from './../../../../images/pngwing.com (2).png'
import {PostType} from "../../../../redux/profileReducer";
import Button from "../../../common/Button";


export const Post = (props: PostType) => {
    const style = {
        width: '20px',
        fontSize: '10px',
        padding: '0'
    }
    return (
        <div>
            <div className={classes.item}>
                <img src={props.img}/>
                <span>{props.text}</span>
                <div className={classes.likes}>
                    {/*<img src={like} className={classes.like}/>*/}
                    {/*<img src={like} className={classes.dislike}/>*/}
                    {/*<button className={classes.button}>{props.button}</button>*/}
                    <Button onClick={() => {}} name={props.button} style={style}/>
                </div>
            </div>
        </div>
    );
};

export default Post;