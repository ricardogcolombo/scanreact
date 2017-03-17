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
    var _self = this;
        console.log('button clicked');
/* eslint-disable */
        cordova.plugins.barcodeScanner.scan(
            function(result) {
                getProduct('1683238');
                _self.props.router.push('details')
                alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);
            },
            function(error) {
                getProduct('1683238');
                _self.props.router.push('details')
                alert("Scanning failed: " + error);
            }, {
                preferFrontCamera: true, // iOS and Android
                showFlipCameraButton: true, // iOS and Android
                showTorchButton: true, // iOS and Android
                torchOn: true, // Android, launch with the torch switched on (if available)
                prompt: "Place a barcode inside the scan area", // Android
                resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations: true, // iOS
                disableSuccessBeep: false // iOS
            }
        );
        /* eslint-enable*/
    }

    render() {
        return (
            <Scanner buttonText='scan code' onScan={this.onScan.bind(this)}/>
        )
    }

}

// const mapStateToProps = function(state) {
// return {
// config: {
// incidents: state.config.incidents
// }
// };
// }

export default ScannerContainer;

//export default connect(mapStateToProps)(IncidentSubmissionContainer);
