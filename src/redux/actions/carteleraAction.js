import tipos from './tipos';
import axios from 'axios';

export const getCartelera = ()=>dispatch=>{
    dispatch({
        type: tipos.GET_CARTELERA,
        payload: axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es')
    })
};