import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Details from '../components/Details';
import store from '../store';
import '../styles/Details.css';

// set initial state here
const initialState = {
    product: {
        descripcion: '',
        pic: '',
        marca: '',
        codart: ''
    },
    productList: []
};


class DetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product
        })
    }

    componentWillUnmount() {
        this.setState(initialState);
    }

    submitForm() {
        console.log("submit data");
    }

    render() {

        return (
            <Details {...this.state} onSubmitPress={this.submitForm.bind(this)} />
        )
    }
}

DetailsContainer.propTypes = {
    product: React.PropTypes.object
}

const mapStateToProps = function(state, ownProps) {
    return {
        product: state.product

    };
}

export default connect(mapStateToProps)(DetailsContainer);
