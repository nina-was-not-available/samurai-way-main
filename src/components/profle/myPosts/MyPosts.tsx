import React, {memo, useCallback} from 'react';
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {MyPostPT} from "./MyPostsContainer";
import Preloader from "../../common/Preloader";
import avatar from './../../../images/pngwing.com (1).png'
import EditableSpan from "../../common/EditableSpan";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthTS, requiredField} from "../../../utils/validators/validator";
import Button from "../../common/Button";
import {Textarea} from "../../common/FormControl";
import {EditableSpanFunction} from "../../common/EditableSpanFunction";

export const MyPosts = memo((props: MyPostPT) => {
    if (!props.profile.photos) {
        return <Preloader/>
    }

    let postElement = props.postsData.map(post => <Post key={post.id} id={post.id} text={post.text}
                                                        button={post.button} img={props.profile.photos.small? props.profile.photos.small : avatar}/>);

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.addPost(formData.post)
    }
    return (
        <>
            <div className={classes.status}><EditableSpanFunction title={props.status} someThunk={props.updateStatusThunk}/></div>
            <div className={classes.menu}>
                <MyPostReduxForm onSubmit={onSubmit}/>
                {postElement}
            </div>
        </>
    );
})

type FormDataType = {
    post: string
}
const maxLength10 = maxLengthTS(10)
const MyPostsForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.creatingpost}>
                <Field component={Textarea} name={'post'}
                       placeholder={'Write your post'}
                       validate={[requiredField, maxLength10]}
                />
                <div>
                    <button className={classes.button}>Add post</button>
                </div>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm<FormDataType>({
    form: 'myPosts'
})(MyPostsForm)

export default MyPosts;