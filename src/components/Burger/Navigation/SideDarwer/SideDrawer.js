import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Button from '../../../UI/Button/Button';
import Auxlier from '../../../../hoc/Auxiler';


const sidedrawer = (props) => {
    let stylesDrawer= [styles.SideDrawer, styles.Close];
    if(props.open){
        stylesDrawer = [styles.SideDrawer, styles.Open];
    }

    return (
        <Auxlier>
            <Backdrop show= {props.open} clicked={props.close}  />
            <div className={stylesDrawer.join(' ')}>
                <div className={styles.Logo} >
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>

            </div>

            <Button />
        </Auxlier>
    );
};

export default sidedrawer;