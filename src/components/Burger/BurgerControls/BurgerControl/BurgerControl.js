import React from 'react';
import styles from './BurgerControl.module.css';



const burgerControl = (props) => {

    return (
        <div className={styles.BurgerControl}>
            <div className={styles.Label}> {props.Label} </div>

            <button
                className={styles.More}
                onClick={props.removed}
                disabled={props.toDisabled} > Less </button>
                
            <button
                className={styles.Less}
                onClick={props.added} > More </button>
           

        </div>
    );
};


export default burgerControl;