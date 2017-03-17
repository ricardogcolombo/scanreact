import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import Details from '../components/Details';
import store from '../store';

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
    onBackButtonPress() {
        this.props.router.goBack();
    }

    render() {
        return (
            <Details product={ this.props.product } onBackButtonPress={this.onBackButtonPress.bind(this)} />
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
