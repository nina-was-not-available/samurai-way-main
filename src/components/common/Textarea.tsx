import React, {ChangeEvent, KeyboardEvent} from 'react';
import styles from './common.module.css'

type TextareaPT = {
    value?: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
    placehalder?: string
}
const Textarea = (props: TextareaPT) => {
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChange(event)
    }

    return (
        <textarea value={props.value} onChange={onChangeHandler} className={styles.textarea} placeholder={props.placehalder} >
        </textarea>
    );
};

export default Textarea;