import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Details from '../components/Details';
import store from '../store';
import '../styles/Details.css';

class DetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
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
    render() {
        return (
            <Details product={ this.props.product } onSubmitPress={this.submitForm.bind(this)} />
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
