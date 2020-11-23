import React, { Component } from 'react';
import styles from './Order.module.css';


const order = (props) =>  {
 
    const ingredients = [];
    for( let type in props.ingredients){
        ingredients.push(
            {   name:type ,
                amount: props.ingredients[type]
            });
    }

    const showIngreidients = ingredients.map(ig => {
        return(
        <span key={ig.name} 
              style={
                  {textTransform:'capitalize',
                  display:'inline-block',
                  margin:'0 8px',
                  border: '1px solid #ccc',
                  padding: '5px',
                  }} > {ig.name} ({ig.amount}) </span>
        )
    });

    return(
        <div className={styles.Order}>
            <p> Ingredient: {showIngreidients} </p>
            <p> Price : <strong> USD {Number.parseFloat(props.price).toFixed(2)} </strong></p>
        </div>
    );
};

export default order;