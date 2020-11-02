import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl';
import styles from './BurgerControls.module.css';
import propTypes from 'prop-types';

const controls = [
    { Label: 'Salad', type: 'salad' },
    { Label: 'Cheese', type: 'cheese' },
    { Label: 'Bacon', type: 'bacon' },
    { Label: 'Meat', type: 'meat' }
];


const burgerControls = (props) => {
    
    return (

        <div className={styles.BurgerControls}>
           <p> Total Price: <strong>{props.price.toFixed(2)}$ </strong> </p>
            {controls.map(ctrl => (
                <BurgerControl
                    key={ctrl.Label}
                    Label={ctrl.Label}
                    added = {() => props.ingredientAdded(ctrl.type)}
                    removed=  {() => props.ingredientRemove(ctrl.type)}
                    toDisabled = {props.disabled[ctrl.type]}
                     />
            ))} 
            <button 
            className={styles.OrderButton}
            disabled= {!props.purchasable}
            onClick={props.showModal}
            >ORDER NOW </button> 
              
        </div>

    );
}

burgerControls.propTypes = {
    price: propTypes.number.isRequired
    };
    
export default burgerControls;