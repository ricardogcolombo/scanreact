import * as actions from '../actions/products-actions-types'
const emptyProduct = {
    codart: "",
    descripcion: "",
    marca: "",
    contenido: "",
    codmedida: "",
    codsector: "",
    codfamilia: "",
    codean: "",
    SKTMIN: "",
    ULTINGCDR: "",
    PS: "",
    PV: "",
    TIPO: "",
    CAL: "",
    FORMATO: "",
    IMAGEN: "",
    ULTVTA: "",
    FECDISC: "",
    BTOVIG: "",
    VTAMED: ""
}
const productsReducer = function(state = {}, action) {
    switch (action.type) {
        case actions.GET_PRODUCT_SUCCESS:
            return Object.assign({}, state, action.product);
        case actions.CLEAR_PRODUCT:
            return Object.assign({}, state, emptyProduct);
        default:
            return state;
    }
}



export default productsReducer;
