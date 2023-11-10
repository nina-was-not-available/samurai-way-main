import React, {ChangeEvent, useState} from 'react';
import classes from "./MyPosts.module.css";
import {PostsPropsType} from "../../../redux/types";
import Post from "./post/Post";


//props: PostsPropsType
export const MyPosts = (props: PostsPropsType) => {


    let postElement = props.postsData.map(post => <Post key={post.id} id={post.id} text={post.text} button={post.button}/>);


    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')

    }


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return (
        <div className={classes.menu}>
            My post
            <div className={classes.creatingpost}>
                <textarea value={props.newPostText} onChange={onChangeHandler}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postElement}
        </div>
    );
};

export default MyPosts;