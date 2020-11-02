import React, { Component } from 'react';
import Auxlier from '../../hoc/Auxiler'
import styles from './Layout.module.css'
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar';
import SideDrawer from '../Burger/Navigation/SideDarwer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
       
    }

    closeSideDrawer = () => {
        this.setState({showSideDrawer: false});
    };

    openSideDrawer = () => {
        this.setState((prevState) =>{ 
            return {showSideDrawer:!prevState.showSideDrawer};
        });
    };

  


    render() {
        return(
            <Auxlier>
                <Toolbar showSider={this.openSideDrawer}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawer} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Auxlier>
        );
    }

}
export default Layout;