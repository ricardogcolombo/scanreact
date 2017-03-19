import React, {
    Component
} from 'react';
import Scanner from '../components/Scanner';
import List from '../components/List';
import {
    getProduct
} from '../api/products-api';

class ScannerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    onChange(evt) {
        this.state.value = evt.target.value
    }
    navigateToDetails() {
        this.props.router.push('details');
    }
    onManualScan() {
        getProduct(this.state.value);
        this.navigateToDetails();
    }
    onScanSuccess(result) {
        // TODO remove hardcode
        getProduct(result.text || '1683238');
        this.navigateToDetails();
    }
    onScanError(error) {
        // TODO create a popup
        alert("Scanning failed: " + error);
    }
    onScan() {
        var _self = this;
        console.log('button clicked');

        /* eslint-disable */
        cordova.plugins.barcodeScanner.scan(
            this.onScanSuccess.bind(this),
            this.onScanError.bind(this), {
                preferFrontCamera: false, // iOS and Android
                showFlipCameraButton: false, // iOS and Android
                showTorchButton: true, // iOS and Android
                torchOn: false, // Android, launch with the torch switched on (if available)
                prompt: "Ponga el codigo de barra dentro de area del scanner", // Android
                resultDisplayDuration: 100, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                formats: "QR_CODE,PDF_417,EAN_13,EAN", // default: all but PDF_417 and RSS_EXPANDED
                orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
                disableAnimations: true, // iOS
                disableSuccessBeep: false // iOS
            }
        );
        /* eslint-enable*/
    }

    render() {
        let items = (this.props.productList) ? this.props.productList.results : [];
        return (
            <div>
            <List items={items}/>
            <Scanner buttonText='Escanear Producto' onManualScan={this.onManualScan.bind(this)} onChange={this.onChange.bind(this)} inputPlaceholder="Ingrese el codigo de producto" onScan={this.onScan.bind(this)}/>
        </div>
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
