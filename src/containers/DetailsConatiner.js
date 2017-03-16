import React, {Component} from 'react';
import { connect } from 'react-redux';
import Details from '../components/Details';

class DetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    //componentDidMount(){
        //getIncidents(); 
    //}

    //onFooterClick (){
        //this.props.router.push('incidentSubmission');
    //}

    render(){
        return(
            <Details product={ this.props.product } /> 
        ) 
    }

}

const mapStateToProps = function(state) {
    return {
        product: state.productsState.product

    };
}

export default connect(mapStateToProps)(DetailsContainer);
