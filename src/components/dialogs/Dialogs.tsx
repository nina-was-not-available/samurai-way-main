import React, {ChangeEvent, FC} from 'react';
import classes from './Dialogs.module.css'
import {Message} from './message/Message'
import {DialigItem} from './dialogietem/DialogItem';
import {DialogsPT} from "./DialogsContainer";
import Button from "../common/Button";
import Textarea from "../common/Textarea";
import {Redirect} from "react-router-dom";



const Dialogs = (props: DialogsPT) => {

    const onSendClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewMessageText(text)
    }

    const {dialogData, messageData} = props.dialogs
    let dialogElement = dialogData.map(d => <DialigItem name={d.name} id={d.id} key={d.id}/>)
    let messageElement = messageData.map(m => <Message text={m.text} id={m.id} key={m.id}/>)
    let newMessageText = props.dialogs.newMessageText

    //if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                <div>{messageElement}</div>
                <div>
                    <div></div>
                    <Textarea onChange={onNewMessageChange} placehalder={'Enter your message'} value={newMessageText}/>
                    {/*<textarea placeholder={'Enter your message'} value={newMessageText} onChange={onNewMessageChange}></textarea></div>*/}
                </div>
                <div>
                    <Button onClick={onSendClick} name={'Send'}/>
                </div>
            </div>
        </div>
    );
};


export default Dialogs;