import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    clearProduct
} from '../actions/products-actions';
import store from '../store'
import Details from '../components/Details/Details';
import ModalContainer from './ModalContainer';
import {openMessageModal} from '../actions/modal-actions';
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
        this.state = {
            product: null,
            productList:null
        }
        this.openSendMessageModal= this.openSendMessageModal.bind(this);
    }

    componentDidMount() {
        this.state = initialState;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product
        })
    }

    componentWillUnmount() {
        store.dispatch(clearProduct());
    }

    submitForm() {
        console.log("submit data");
    }

    openSendMessageModal(){
        console.log('helloou');
        store.dispatch(openMessageModal()); 
    }

    render() {

        return (
            <div>
                <Details {...this.state} product={ this.props.product } onSubmitPress={this.submitForm.bind(this)} 
                        onSendMessage={this.openSendMessageModal} />
                <ModalContainer/>
            </div>
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
