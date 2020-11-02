import React, { Component } from 'react';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentDidUpdate(){
        console.log('[Ordersummery] did updated')
    }


    render() {
        let listOfIngredients = Object.keys(this.props.ingredients).map(
            igKey =>
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}> {igKey} </span>  : {this.props.ingredients[igKey]}
                </li>
        )

        // [Salad : 1  , Bacon: 2] ....

        return (
            <div>
                <h3> Your Order </h3>
                <p> the Amazing Burger With The Following Ingredients: </p>
                <ul>
                    {listOfIngredients}
                </ul>
                <p> <strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
                <p> Continue To ChechOut?</p>
                <Button
                    btnType={"Danger"} clicked={this.props.backToOrder}
                > CANCLE  </Button>

                <Button btnType={"Success"} clicked={this.props.continueToCheckout}
                > CONTINUE </Button>

            </div>
        );

    }

};

export default OrderSummary;