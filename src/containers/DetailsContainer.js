import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Details from '../components/Details';

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    //componentDidMount(){
    //getIncidents(); 
    //}

    onBackButtonPress() {
        this.props.router.goBack();
    }

    render() {
        return (
            <Details product={ this.props.product } onBackButtonPress={this.onBackButtonPress.bind(this)} />
        )
    }

}

const mapStateToProps = function(state) {
    return {
        product: state.productsState.product

    };
}

export default connect(mapStateToProps)(DetailsContainer);
