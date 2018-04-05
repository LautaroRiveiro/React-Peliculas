import tipos from './tipos';
import axios from 'axios';

export const busqueda = (termino)=>dispatch=>{
    dispatch({
        type: tipos.BUSQUEDA,
        payload: axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es&query=${termino}&page=1&include_adult=false`)
    })
};