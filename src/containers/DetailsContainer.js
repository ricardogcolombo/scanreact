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
import {openMessageModal, closeMessageModal} from '../actions/modal-actions';
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
        this.openSendMessageModal = this.openSendMessageModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
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
        var modalProps=  {
            title: 'Enviar Mensaje',
            inputs: ['Asunto'],
            textAreaTitle: 'Descripcion',
            submitButtonText: 'Enviar!',
            onClosePress: this.onCloseModal
        }
        store.dispatch(openMessageModal(modalProps)); 
    }

    onCloseModal(){
        store.dispatch(closeMessageModal()); 
    }

    render() {

        return (
            <div>
                <Details {...this.state} product={ this.props.product } onSubmitPress={this.submitForm.bind(this)} 
                        onSendMessage={this.openSendMessageModal}/>
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
