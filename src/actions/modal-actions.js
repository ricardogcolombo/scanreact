import * as types from './modal-actions-types';


export function openMessageModal(props) {
    return {
        type: types.SHOW_MODAL,
        modalType: 'MESSAGE_MODAL',
        modalProps: {...props}
    }
}

export function closeMessageModal() {
    return {
        type: types.CLOSE_MODAL,
        modalType: 'MESSAGE_MODAL'
    }
}
