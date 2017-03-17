import React, {
    Component
} from 'react';
import Scanner from '../components/Scanner';
import {
    getProduct
} from '../api/products-api';

class ScannerContainer extends Component {
    constructor(props) {
        super(props);
    }

    onScan() {
        console.log('button clicked');
        getProduct('1683238');
        this.props.router.push('details');
    }

    render() {
        return (
            <Scanner buttonText='scan code' onScan={this.onScan.bind(this)}/>
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
