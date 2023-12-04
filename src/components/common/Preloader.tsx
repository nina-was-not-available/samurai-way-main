import React from 'react';
import styles from "./common.module.css";
import loader from "../../images/PYh.gif";

const Preloader = () => {
    return (
        <div className={styles.loader}>
            <img
                src={loader}
                // src={'https://i.gifer.com/y7.gif'}
            />

        </div>
    );
};

export default Preloader;