import React, { Component } from 'react';
import styles from './Modal.module.css';
import Auxlier from '../../../hoc/Auxiler';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    componentDidUpdate() {
        console.log('[Modal] Updated')
    }


    render(){

        return(
            <Auxlier>
            <Backdrop show={this.props.show} clicked={this.props.modalclosed}     />
             <div className={styles.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                }}>
                {this.props.children}
            </div>
        </Auxlier>

        );
        
    }
}

export default Modal;