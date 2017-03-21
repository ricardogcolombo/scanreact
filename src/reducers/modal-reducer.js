import * as actions from '../actions/modal-actions-types';

const initialState = {
    modalType: null,
    modalProps: {}
}

function modalReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SHOW_MODAL: return {
            modalType: action.modalType,
            modalProps: action.modalProps
        }
        case actions.HIDE_MODAL: return initialState
        default: return state
    }

}

export default modalReducer;
