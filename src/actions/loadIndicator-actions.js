import * as types from './loadIndicator-actions-types';

export function showLoadIndicator() {
    return {
        type: types.SHOW_LOAD_INDICATOR
    };
}
export function hideLoadIndicator() {
    return {
        type: types.HIDE_LOAD_INDICATOR
    };
}

