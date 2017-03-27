import React from 'react';
import MessageModal from '../components/MessageModal';
import { connect } from 'react-redux';

const MODAL_COMPONENTS = {
    'MESSAGE_MODAL': MessageModal
}

const ModalContainer = ({modalType, modalProps}) => {
    if (!modalType) {
        return <span /> // after React v15 you can return null here
    }
    
    const SpecificModal = MODAL_COMPONENTS[modalType];  
    
    return(
        <SpecificModal {...modalProps} />
    )

}

export default connect(state => state.modal)(ModalContainer)
