import React, {
    Component
} from 'react';
import logo from '../logo.svg';

import {
    connect
} from 'react-redux';

import '../styles/App.css';
import Button from '../components/button/Button';

class App extends Component {
    onBackButtonPress() {
        this.props.router.goBack();
    }
    showBackButton() {
        let classname = 'App__header__Backbutton hidden';
        if (this.props.location.pathname === '/details') {
            classname = 'App__header__Backbutton';
        }
        return classname;
    }
    render() {
        const backButtonClassName = this.showBackButton();
        return (
            <div className="App">
            <div className="App__header">
            <Button className={backButtonClassName} onClick={this.onBackButtonPress.bind(this)}/>
            <p className='App__header__title'>LA ANONIMA</p>
            </div>
            <div className="App__content">
                {this.props.children}
            </div>
            </div>
        );
    }
};
const mapStateToProps = function(state) {
    return {
        product: state.product

    };
}

export default connect(mapStateToProps)(App);
