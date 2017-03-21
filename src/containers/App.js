import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import '../styles/App.css';
import Button from '../components/button/Button';
import LoadIndicator from '../components/LoadIndicator';

import {
    getProductList
} from '../api/products-api';


const initialState = {
    isLoadActive: false
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        getProductList();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isLoadActive: nextProps.isLoadActive
        })
    }
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
        let loaderClassName = (this.state.isLoadActive) ? 'modal' : 'hidden';

        return (
            <div className="App">
            <LoadIndicator loaderClassName={loaderClassName}/>

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
        isLoadActive: state.loadIndicator.isLoadActive
    };
}

export default connect(mapStateToProps)(App);
