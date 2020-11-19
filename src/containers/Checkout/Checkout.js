import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CheckouSum from '../../components/Order/CheckoutSum';

class checkout extends Component {
    state = {
        ingredients:
         {
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 1,
            
        }
    }
     componentDidMount(){
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        const ingredients= {};
        for(let param of query.entries()){
            // [salad , 1] ......
             ingredients[param[0]] =+ param[1];
        }
        console.log(ingredients);
        this.setState({ingredients:ingredients});
    }


    exitCheckout = () => {
     this.props.history.goBack('/');
    }

    continueCheckout = () => {
        this.props.history.replace('/checkout/contact-data');

    }



    render() {
        
        return (
            <div>
                <CheckouSum
                    ingredients={this.state.ingredients}
                    exitCheckout={this.exitCheckout}
                    continueCheckout={this.continueCheckout} />
            </div>
        );
    }
}
export default checkout;