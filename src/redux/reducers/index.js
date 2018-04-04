import {combineReducers} from 'redux';
import fecha from './fechaReducer';
import peliculas from './peliculasReducer';
import detalle from './detalleReducer';

export default combineReducers({
    fecha: fecha,
    peliculas: peliculas,
    detalle: detalle
})