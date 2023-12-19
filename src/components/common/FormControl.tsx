import React, {ChangeEvent, FC, KeyboardEvent} from 'react';
import styles from './common.module.css'
import {WrappedFieldProps} from "redux-form";


interface FormControlPT extends WrappedFieldProps {
    value?: string
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
}

export const FormControl: FC<WrappedFieldProps> = ({ input, meta, children, ...props }) => {
    const showError = meta.touched && meta.error;
    return (
        <>
            <div>
                {children}
                {showError && <div className={styles.error}>{meta.error}</div>}
            </div>
        </>
    );
};






export const Textarea:FC<FormControlPT> = (props) => {
    const {input, meta, ...restProps} = props
    const showError = meta.touched && meta.error;
    return (
        <FormControl {...props} >
            <textarea  {...restProps} {...input} className={showError? styles.textarea + ' ' +  styles.error : styles.textarea} />
        </FormControl>
    );
};


export const Input:FC<FormControlPT> = (props) => {
    const {input, meta, ...restProps} = props
    const showError = meta.touched && meta.error;
    return (
        <FormControl {...props}>
            <input {...restProps} {...input} className={showError? styles.inputLogin + ' ' +  styles.error : styles.inputLogin}/>
        </FormControl>
    );
};


export const Checkbox:FC<FormControlPT> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input  {...restProps} {...input}  />
        </FormControl>
    );
};



// export const Textarea:FC<FormControlPT> = ({input, meta, ...props}) => {
//     const showError = meta.touched && meta.error
//     return (
//         <>
//             <textarea  {...props} {...input} className={showError? styles.textarea + ' ' +  styles.error : styles.textarea}/>
//             {showError && <div className={styles.error}>{meta.error}</div>}
//         </>
//     );
// };