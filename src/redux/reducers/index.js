import {combineReducers} from 'redux';
import fecha from './fechaReducer';
import peliculas from './peliculasReducer';

export default combineReducers({
    fecha: fecha,
    peliculas: peliculas
})