import React, { Component } from 'react';
import Order from '../../../components/Order/Order';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        price: 0,
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(res => {
                let fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({ loading: false, orders: fetchOrders })
                console.log(res)
            })
            .catch(res => {
                this.setState({ loading: false })
            })
    }


    render() {
       
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                    ))};
            </div>
        );
    }

}

export default Orders;