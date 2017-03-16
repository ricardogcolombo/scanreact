import React, {Component} from 'react';
import { connect } from 'react-redux';
import Scanner from '../components/Scanner';

class ScannerContainer extends Component {
    constructor(props) {
        super(props);
    }

    onScan(){
        console.log('button clicked');
        //getData(); 
    }

    render(){
        return(
            <Scanner buttonText='scan code' onScan={this.onScan}/> 
        ) 
    }

}

//const mapStateToProps = function(state) {
    //return {
        //config:{ 
            //incidents: state.config.incidents
        //}
    //};
//}

export default ScannerContainer;

//export default connect(mapStateToProps)(IncidentSubmissionContainer);

