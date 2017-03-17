import React, {
    Component
} from 'react';
import logo from '../logo.svg';

import {
    connect
} from 'react-redux';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="Header">header</div>
                {this.props.children}
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
