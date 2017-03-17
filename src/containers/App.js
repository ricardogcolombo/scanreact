import React, {
    Component
} from 'react';
import logo from '../logo.svg';

import {
    connect
} from 'react-redux';

import './App.css';

class AppC extends Component {
    render() {
        return (
            <div className="App">
            <div className="Header">header</div>
                {this.props.children}
            </div>
        );
    }
};

export default AppC
