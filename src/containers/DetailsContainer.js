import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Details from '../components/Details';
import ModalContainer from './ModalContainer';
import store from '../store';
import {openMessageModal} from '../actions/modal-actions';
import '../styles/Details.css';

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
        //getIncidents(); 
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            product: nextProps.product
        })
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
                <Details product={ this.props.product } onSubmitPress={this.submitForm.bind(this)} 
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
