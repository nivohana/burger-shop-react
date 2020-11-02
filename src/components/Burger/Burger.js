import React from 'react';
import BurgerIngredient from './BurgerIngridients/BurgerIngredient';
import styles from './Burger.module.css';


const burger = (props) => {
    let ingredientsToArry = Object.keys(props.ingredients) // ['Salad','Bacon',....]
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        // Another option to calculate the sum 
        // let sumOfIngredients = Object.values(props.ingredients).reduce((a, b) => a + b, 0); 

     if (ingredientsToArry.length === 0) {
        ingredientsToArry= <p > Please Add Some Ingredients! </p>
     }   



    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={'bread-top'} />
            {ingredientsToArry}
            <BurgerIngredient type={'bread-bottom'} />
         
        </div>
    );
};

export default burger;