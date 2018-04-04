import tipos from '../actions/tipos';

const initState = {
    data: new Date()
};

export default (state=initState, action) => {
    switch (action.type){
        case tipos.UPDATE_FECHA:
            return Object.assign({},state,{
               data: action.payload
            });
        default:
            return state;
    }
}