import tipos from '../actions/tipos';


const initState = {
    data: []
};

export default ( state=initState, action )=>{
    switch (action.type){
        case tipos.BUSQUEDA_FULFILLED:
            return Object.assign({},state,{
                data: action.payload.data.results
            });
        default:
            return state;
    }
}