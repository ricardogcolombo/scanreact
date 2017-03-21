import * as actions from '../actions/loadIndicator-actions-types'

const loadIndicatorReducer = function(state = {}, action) {
    switch (action.type) {
        case actions.SHOW_LOAD_INDICATOR:
            return Object.assign({}, state, {isLoadActive: true});
        case actions.HIDE_LOAD_INDICATOR:
            return Object.assign({}, state, {isLoadActive: false});
        default:
            return state;
    }
}

export default loadIndicatorReducer;
