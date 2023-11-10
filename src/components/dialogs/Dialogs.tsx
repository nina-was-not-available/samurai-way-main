import React, {ChangeEvent, FC} from 'react';
import classes from './Dialogs.module.css'
import {Message} from './message/Message'
import {DialigItem} from './dialogietem/DialogItem';
import {DialogsProps} from "../../redux/types";



const Dialogs = (props: DialogsProps) => {

    const onSendClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewMessageText(text)
    }

    const {dialogData, messageData} = props.dialogs
    let dialogElement = dialogData.map(d => <DialigItem name={d.name} id={d.id}/>)
    let messageElement = messageData.map(m => <Message text={m.text} id={m.id}/>)
    let newMessageText = props.dialogs.newMessageText
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div>
                    <div></div>
                    <textarea placeholder={'Enter your message'} value={newMessageText} onChange={onNewMessageChange}></textarea></div>
                <div>
                    <button className={classes.sendButton} onClick={onSendClick}>send</button>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;