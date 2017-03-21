import * as types from './modal-actions-types';


export function openMessageModal() {
    return {
        type: types.SHOW_MODAL,
        modalType: 'MESSAGE_MODAL',
        modalProps: {
            title: 'Enviar Mensaje',
            inputs: ['Asunto'],
            textAreaTitle: 'Descripcion',
            submitButtonText: 'Enviar!'
        }
    }
}
