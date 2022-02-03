import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./Modal.module.css";

const Modal = () => {

    return (
    <Fragment>
        <div className={styles.backDrop}></div>;
        <div className={styles.overlay}></div>;
    </Fragment>
    )

};

export default Modal;
