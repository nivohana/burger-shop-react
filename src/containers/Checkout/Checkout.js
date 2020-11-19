import React, { Component } from 'react';
import CheckouSum from '../../components/Order/CheckoutSum';

class checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 2,
            chesse: 1
        }
    }

    render() {

        return (
            <div>
                <CheckouSum ingredients={this.state.ingredients} />
            </div>
        );
    }
}
export default checkout;