import tipos from './tipos';
import axios from 'axios';

export const getDetalle = (id)=> dispatch => {
    dispatch({
        type: tipos.GET_DETALLE,
        payload: axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es`)
    })
};

export const getActores = (id)=>dispatch=>{
    dispatch({
        type: tipos.GET_ACTORES,
        payload: axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es`)
    })
};