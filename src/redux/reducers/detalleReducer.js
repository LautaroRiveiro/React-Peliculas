import tipos from "../actions/tipos";

const initState = {
    data: {},
    actores: []
};

export default ( state=initState, action )=>{
    switch (action.type){
        case tipos.GET_DETALLE_FULFILLED:
            return Object.assign({},state,{
                data: action.payload.data
            });
        case tipos.GET_DETALLE_PENDING:
            return Object.assign({},state,{
                data: ""
            });
        case tipos.GET_ACTORES_FULFILLED:
            return Object.assign({},state,{
                actores: action.payload.data.cast
            });
        default:
            return state;
    }
}

