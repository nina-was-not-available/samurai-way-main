import React, {ChangeEvent, useState} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {MyPostPT} from "./MyPostsContainer";
import Preloader from "../../common/Preloader";
import ava from './../../../images/инфочат.jpg'
import avatar from './../../../images/pngwing.com (1).png'
import Button from "../../common/Button";
import Textarea from "../../common/Textarea";


//props: PostsPropsType
export const MyPosts = (props: MyPostPT) => {
    if (!props.profile.photos) {
        return <Preloader/>
    }

    let postElement = props.postsData.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                        button={post.button} img={props.profile.photos.small? props.profile.photos.small : avatar}/>);


    const addPost = () => {
        if (props.newPostText.trim() !== '') {
            props.addPost()
        }

        props.updateNewPostText('')

    }


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(event.currentTarget.value)
    }

    return (
        <div className={classes.menu}>
            <div className={classes.header}>
                My post
            </div>
            <div className={classes.creatingpost}>
                <Textarea onChange={onChangeHandler} value={props.newPostText} placehalder={'Write your post'}/>
                {/*<textarea value={props.newPostText} onChange={onChangeHandler}/>*/}
                <div>
                    {/*<button onClick={addPost}>Add post</button>*/}
                    <Button onClick={addPost} name={'Add post'}/>
                </div>
            </div>
            {postElement}
        </div>
    );
};

export default MyPosts;