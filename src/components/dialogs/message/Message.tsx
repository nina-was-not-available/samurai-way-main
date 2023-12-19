import React from "react";
// import classes from './../Dialogs.module.css'
import {MessageData} from "../../../redux/dialogsReducer";
import classes from'./Message.module.css'





export const Message = (props: MessageData) => {

    return (
        <>
                <div className={classes.dialog}>
                    <div className={classes.messageRight}>
                        {props.text}
                    </div>
                </div>

                <div className={classes.messageLeft}>
                    <div className="message left">
                        No
                    </div>
                </div>

        </>
    );
}
