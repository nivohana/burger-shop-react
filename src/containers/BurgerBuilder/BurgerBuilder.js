import React, { Component } from 'react';
import Auxlier from '../../hoc/Auxiler';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}

class buildBurger extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        showModal:false
    };

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

    updateShowModal = () =>{
      // const updateShowModal = this.state.showModal;

       this.setState({showModal: true})

    };

    purchaseCancelHandler = () => {
        this.setState({showModal: false})
    };


    purchaseContinueHandler = () => {
        alert('Good Choice!')
    };



    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0                
        }


        return (
            <Auxlier>

                <Modal show={this.state.showModal} modalclosed= {this.purchaseCancelHandler}>
                    <OrderSummary
                     ingredients= {this.state.ingredients}
                     backToOrder= {this.purchaseCancelHandler}
                     continueToCheckout={this.purchaseContinueHandler}
                     price={this.state.totalPrice}
                      />
                </Modal>
                

                <Burger
                    ingredients={this.state.ingredients}
                />

                <BurgerControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    showModal= {this.updateShowModal}
                />

            </Auxlier>


        );
    }

}

export default buildBurger;






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