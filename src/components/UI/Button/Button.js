import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';


const button = (props) => (

            <button
                className={[styles.Button, styles[props.btnType]].join(' ')}
                onClick={props.clicked}>  {props.children} </button>
        
);


export default button;