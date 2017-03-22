import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import store from '../store';

import Scanner from '../components/Scanner/Scanner';
import ListItemContainer from './ListContainer';

import {
    getProduct
} from '../api/products-api';

import {
    showLoadIndicator
} from '../actions/loadIndicator-actions';

class ScannerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            trakingClick: null,
            targetElement: null,
            touchStartX: null,
            touchStartY: null
        }
    }
    onChange(evt) {
        this.setState({
            value: evt.target.value
        })
    }
    navigateToDetails() {
        store.dispatch(showLoadIndicator());
        this.props.router.push('details');
    }
    onManualScan() {
        this.goToDetails(this.state.value)
    }
    onScanSuccess(result) {
        if (!result.cancelled) {
            // TODO check if is successfull the get from backend or show message
            this.goToDetails(result.text)
        }
    }
    goToDetails(id) {
        getProduct(id);
        this.navigateToDetails();
    }
    onScanError(error) {
        // TODO create a popup
        alert("Scanning failed: " + error);
    }
    onTouchCancelScan() {
        console.log("cancelScan");
        this.setState({
            trackingClick: false,
            targetElement: null
        });
    }
    onTouchEndScan() {

        console.log("endscan");
        this.setState({
            trackingClick: false
        })
        this.onScan();
    }
    onTouchMoveScan() {
        console.log("movescan");

        if (!this.props.trackingClick) {
            return true;
        }

        // If the touch has moved, cancel the click tracking
        if (this.props.targetElement !== event.target ||
            (Math.abs(event.changedTouches[0].pageX - this.propstouchStartX) > this.props.touchBoundary ||
                (Math.abs(event.changedTouches[0].pageY - this.props.touchStartY) > this.props.touchBoundary))) {
            this.setState({
                trackingClick: false,
                targetElement: null
            })
        }

    }
    onTouchStartScan() {
        console.log("startScan");
        this.setState({
            trackingClick: true,
            targetElement: event.target,
            touchStartX: event.targetTouches[0].pageX,
            touchStartY: event.targetTouches[0].pageY
        })
        return true;
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

    onSelectedItem(evt) {
        console.log("item selected ");
    }

    render() {
        return (
            <div>
            <Scanner
            buttonText='Escanear Producto'
            onItemClick={this.onSelectedItem.bind(this)}
            onManualScan={this.onManualScan.bind(this)}
            onChange={this.onChange.bind(this)}
            inputPlaceholder="Ingrese el codigo de producto"
            onTouchCancelScan={this.onTouchCancelScan.bind(this)}
            onTouchEndScan={this.onTouchEndScan.bind(this)}
            onTouchMoveScan={this.onTouchMoveScan.bind(this)}
            onTouchStartScan={this.onTouchStartScan.bind(this)}/>

            <ListItemContainer  onItemSelected={this.goToDetails.bind(this)}/>
        </div>
        )
    }

}

const mapStateToProps = function(state) {
    return {
        config: {
            product: state.product,
            productList: state.productList
        }
    };
}

// export default ScannerContainer;

export default connect(mapStateToProps)(ScannerContainer);
