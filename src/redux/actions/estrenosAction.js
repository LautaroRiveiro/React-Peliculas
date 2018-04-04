import tipo from './tipos';
import axios from 'axios';

export const getProximosEstrenos = ()=>dispatch=>{
    dispatch({
        type: tipo.GET_PROXIMOS_ESTRENOS,
        payload: axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es')
    })
};