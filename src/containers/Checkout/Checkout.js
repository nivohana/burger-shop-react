// import axios from 'axios';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSum from '../../components/Order/CheckoutSum/CheckoutSum';
import ContactData from './ContactData/ContactData';


class Checkout extends Component {
    state = {
        ingredients:null,
        price:0 
    }

     componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients= {};
        let price = 0;
        for(let param of query.entries()){
            // [salad , 1] ......
            if(param[0] === 'price'){
                price = param[1];
            }else{
                ingredients[param[0]] =+ param[1];
            } 
        }
        console.log(ingredients);
        console.log(price);
        this.setState({ingredients:ingredients , price:price});
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
                <CheckoutSum
                    ingredients={this.state.ingredients}
                    exitCheckout={this.exitCheckout}
                    continueCheckout={this.continueCheckout} />

                <Route 
                    path= "/checkout/contact-data"
                    render= {(props) => (<ContactData ingredients= {this.state.ingredients}
                                                 price={this.state.price}
                                                  {...props} />)} />

            </div>
        );
    }
}
export default Checkout;