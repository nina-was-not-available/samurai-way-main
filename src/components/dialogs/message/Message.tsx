import React from "react";
import classes from './Message.module.css'
import {MessageData} from "../../../redux/dialogsReducer";





export const Message = (props: MessageData) => {
    // let answer = React.createRef<HTMLTextAreaElement>()
    // const onSendClick = () => {
    //     let text = answer.current?.value
    //     alert(text)
    // }

    return (
        <>
            <div>{props.text}</div>
            <div className={classes.answer}>
                {/*<textarea ref={answer}></textarea>*/}
                {/*<button className={classes.sendButton} onClick={onSendClick}>send</button>*/}
            </div>
        </>
    );
}
