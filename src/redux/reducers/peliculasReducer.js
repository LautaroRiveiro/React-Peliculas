import tipos from '../actions/tipos';

const initialState = {
    cartelera: [],
    proximosEstrenos: [],
    peliculaDestacada: ""
};

export default ( state=initialState, action )=>{
    switch (action.type){
        case tipos.GET_CARTELERA_FULFILLED:
            const {results} = action.payload.data;
            return Object.assign({},state,{
                cartelera: results,
                peliculaDestacada: results[ Math.floor(Math.random()*results.length) ]
            });
        default:
            return state;
    }
}