import React, {ChangeEvent, FC} from 'react';
import classes from './Dialogs.module.css'
import {Message} from './message/Message'
import {DialigItem} from './dialogietem/DialogItem';
import {DialogsPT} from "./DialogsContainer";
import Button from "../common/Button";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthTS, requiredField} from "../../utils/validators/validator";
import {Textarea} from "../common/FormControl";


const Dialogs = (props: DialogsPT) => {

    const {dialogData, messageData} = props.dialogs
    let dialogElement = dialogData.map(d => <DialigItem name={d.name} id={d.id} key={d.id}/>)
    let messageElement = messageData.map(m => <Message text={m.text} id={m.id} key={m.id}/>)

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.sendMessage(formData.message)
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                    {dialogElement}
                </div>
                <div className={classes.messages}>
                    <div>{messageElement}</div>
                    <DialogsReduxForm onSubmit={onSubmit}/>
                </div>

            </div>

        </div>
    );
};


export default Dialogs;
type FormDataType = {
    message: string
}
const maxLength50 = maxLengthTS(50)
const DialogsForm = (props: InjectedFormProps<FormDataType>) => {

    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <div>
                <Field component={Textarea} placeholder={'Enter your message'}
                       validate={[requiredField, maxLength50]}
                       placehalder={'Enter your message'}
                          // className={classes.textarea}
                       name={'message'}></Field>
            </div>
                <button className={classes.button}>Send</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm<FormDataType>({
    form: 'dialogs'
})(DialogsForm)