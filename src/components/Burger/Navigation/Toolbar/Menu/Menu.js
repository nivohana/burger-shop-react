import React from 'react';
import styles from './Menu.module.css';  

const menu = (props) => (

    <div className={styles.Menu}> 
         <div onClick={props.open}> </div> 
         <div onClick={props.open}> </div> 
         <div onClick={props.open}> </div> 
    </div>
    
);



export default menu;