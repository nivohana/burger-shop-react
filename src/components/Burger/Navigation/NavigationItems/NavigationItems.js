import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';


const navigationItems = () =>(
    <div className={styles.NavigationItems}> 
        <NavigationItem link='/' active> Burger Builder </NavigationItem> 
        <NavigationItem link='/'> Checkout </NavigationItem> 
    
    </div>

);

export default navigationItems;