import React, {ChangeEvent, useEffect, useState} from 'react';
import classes from './common.module.css'

type EditableSpanPT = {
    title: string | null
    someThunk: (status: string) => Promise<void>
}

export const EditableSpanFunction = (props: EditableSpanPT) => {

    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.title)

    useEffect(() => {
        setTitle(props.title)
    }, [props.title]);

    const onDoubleClickHandler = () => {
        setEditMode(true)
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onBlurHandler = () => {
        setEditMode(false)
        props.someThunk(title ? title : '')
    }

    return (
        <div style={{marginTop: '10px'}}>
            Status:
            {!editMode ? <div>
                    <span onDoubleClick={onDoubleClickHandler}>{props.title ? props.title : '#nostatus'}</span>
                </div>
                : <div>
                    <input
                        value={title ? title : ''}
                        onChange={onChangeHandler} autoFocus
                        onBlur={onBlurHandler} className={classes.input}
                        placeholder={'Write something...'}
                    />
                </div>}
        </div>
    );

}

