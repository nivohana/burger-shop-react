import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';

class ContactData extends Component {
     state = {
          Name: '',
          Address: {
               Street: '',
               ZipCode: ''
          },
          PaymenyMethod: '',
          loader: false
     }

     orderHandler = (event) => {
          event.preventDefault();
          this.setState({ loader: true })
          const order = {
               ingredients: this.props.ingredients,
               price: this.props.price,
               customer: {
                    name: 'Niv',
                    address: {
                         street: ' Levontin 30',
                         zipcose: '31234',
                         country: 'israel'
                    },
                    email: 'nivtheking@gmail.com'
               },
               deliveryMethod: 'SuperFast'
          }

          axios.post('/orders.json', order)
               .then(respons => {
                    this.setState({ loader: false })
                    console.log(respons);
                    this.props.history.push('/')
                    console.log("success");
               })
               .catch(error => {
                    this.setState({ loader: false })

               })

     }

     render() {
          let form = (
               <form>
                    <input className={styles.Input} type='text' name='name' placeholder='Your Name' />
                    <input className={styles.Input} type='text' name='mail' placeholder='Your Mail' />
                    <input className={styles.Input} type='text' name='street' placeholder='Your Street' />
                    <input className={styles.Input} type='text' name='zipcode' placeholder='Your ZipCode' />
                    <Button btnType='Success' clicked={this.orderHandler}> Order </Button>
               </form>
          )

          if (this.state.loader) {
               form = <Spinner />
          }

          return (
               <div className={styles.ContactData}>
                    <h4>Enter Your Contacty Data </h4>
                    {form}
               </div>
          );
     }
}



export default ContactData;