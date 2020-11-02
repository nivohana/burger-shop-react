import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Menu from '../Toolbar/Menu/Menu';

const toolbar = (props) => {

    return (
        <header className={styles.Toolbar}>
            <Menu open={props.showSider}>   </Menu>
            <div className={styles.Logo}>
                <Logo />
            </div>

            <nav className={styles.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;