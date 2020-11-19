import React, { Component } from 'react';
import Auxlier from '../../hoc/Auxiler';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.63
}

class buildBurger extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        showModal: false,
        loader: false,
        error: false,
    };

    componentDidMount() {
        axios.get('/Ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data })
            })
            .catch(error => {
                this.setState({error:true})
            })

    }

    addIngredientHandler = (type) => {
        let ingredientsUpdate = { ...this.state.ingredients }
        ingredientsUpdate[type]++;



        let priceAdittion = INGREDIENT_PRICES[type];
        let newPrice = priceAdittion + this.state.totalPrice;


        this.setState({ totalPrice: newPrice, ingredients: ingredientsUpdate });
        this.updatePurchasable(ingredientsUpdate);
    }



    removeIngredientHandler = (type) => {
        let ingredientsUpdate = { ...this.state.ingredients }
        ingredientsUpdate[type]--;

        if (ingredientsUpdate[type] < 0) {
            ingredientsUpdate[type] = 0
        }

        let priceReduce = INGREDIENT_PRICES[type];
        let newPrice = this.state.totalPrice - priceReduce;

        if (newPrice < 4) {
            newPrice = 4
        }

        this.setState({ totalPrice: newPrice, ingredients: ingredientsUpdate });
        this.updatePurchasable(ingredientsUpdate);
    };

    updatePurchasable = (ingredients) => {

        let sum = Object.values(ingredients).reduce((a, b) => a + b, 0)
        this.setState({ purchasable: sum > 0 });

    };

    updateShowModal = () => {
        // const updateShowModal = this.state.showModal;

        this.setState({ showModal: true })

    };

    purchaseCancelHandler = () => {
        this.setState({ showModal: false })
    };

    purchaseContinueHandler = () => {
        //alert('Good Choice!')
        // this.setState({ loader: true })
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Niv',
        //         address: {
        //             street: ' Levontin 30',
        //             zipcose: '31234',
        //             country: 'israel'
        //         },
        //         email: 'nivtheking@gmail.com'
        //     },
        //     deliveryMethod: 'SuperFast'
        // }

        // axios.post('/orders.json', order)
        //     .then(respons => {
        //         this.setState({ loader: false, showModal: false })
        //         console.log(respons);
        //     })
        //     .catch(error => {
        //         this.setState({ loader: false, showModal: false })

        //     })
        const queryParams = []
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = queryParams.join('&');
        console.log(queryString);
       
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+ queryString 
        })
        

    }


    render() {

        console.log('1')
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        console.log('2')

        let orderSummary = null;
        let burger = this.state.error? <p style={{textAlign:'center'}}> Cant load The Ingredients!</p> : <Spinner />

        if (this.state.ingredients) {
            burger = (
                <Auxlier>
                    <Burger ingredients={this.state.ingredients} />
                    <BurgerControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemove={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        showModal={this.updateShowModal}
                    />
                </Auxlier>
            );
            orderSummary = 
                <OrderSummary
                    ingredients={this.state.ingredients}
                    backToOrder={this.purchaseCancelHandler}
                    continueToCheckout={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                />
        }

        if (this.state.loader) {
            orderSummary = <Spinner />
        }

        
        return (
            <Auxlier>
                <Modal show={this.state.showModal} modalclosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                    {burger}
                    
            </Auxlier>
        );
    }
}

export default WithErrorHandler(buildBurger, axios);






//

// Some manipulation on JS arrays
// test1 = () => {
//     console.log(this.state.ingredients['Salad']);
// };

// test2 = () =>  {
// //    let vals = [1,2,3,4,5]  
// //    let sum = 0;
// //    for(let v of vals) {
// //         sum += v ;
// //    }
// //    return sum;

// let vals = [1,2,3,4,5];
// let answer = vals.reduce((acc,val) => acc + val,10 );
//     return answer;

// };

// test3 = () =>  {
//     let vals = [13,21,9,4,5]

//     let answer = vals.reduce((a,b) => (b<a)? b : a , );
//         console.log(answer);
// }