import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import styles from './CheckoutSum.module.css';

const checkoutSum = (props) => {
    
    return (
        <div className={styles.CheckoutSum}>
            <h1> Your Tasty Burger </h1>
            <div style={{width:'100%', margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                btnType={'Danger'}
                clicked={props.exitCheckout}>CANCELE</Button>
                
            <Button
                btnType={'Success'}
                clicked={props.continueCheckout}>CONTINUE</Button>
        </div>
    )
};

export default checkoutSum;