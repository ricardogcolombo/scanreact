import React, {
    Component
} from 'react';
import logo from '../logo.svg';

import {
    connect
} from 'react-redux';

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
            <div className="App__header">LA ANONIMA</div>
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
