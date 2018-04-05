import {combineReducers} from 'redux';
import fecha from './fechaReducer';
import peliculas from './peliculasReducer';
import detalle from './detalleReducer';
import busqueda from './busquedaReducer';

export default combineReducers({
    fecha: fecha,
    peliculas: peliculas,
    detalle: detalle,
    busqueda: busqueda
})