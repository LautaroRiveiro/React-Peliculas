import React from 'react';
import Destaque from '../components/Destaque';
import Estrenos from '../components/Estrenos';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCartelera} from "../redux/actions/carteleraAction";

class HomePage extends React.Component {

    state = {
        //resultados: [],
        //peliculaDestacada: "",
        proximosEstrenos: []
    };

    componentDidMount() {
        //this.getData();
        this.getProximosEstrenos();
        this.props.getCartelera();
        console.info("PROPS HOMEPAGE",this.props);
    }

    /* Refactorizado. Se incluye en Store de Redux.
        getData = async () => {
            try {
                const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es');
                this.setState({
                    resultados: resultados.data.results,
                    peliculaDestacada: resultados.data.results[Math.floor(Math.random() * resultados.data.results.length)]
                })
            } catch (error) {
                console.info("error", error);
            }
        };
    */

    getProximosEstrenos = async ()=>{
        try {
            const proximosEstrenos = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es');
            this.setState({
                proximosEstrenos: proximosEstrenos.data.results
            })
        } catch (error) {
            console.info("errores",error);
        }

    };

    render() {
        return (
            <div>
                <Destaque pelicula={this.props.peliculas.peliculaDestacada} />
                <Estrenos title="En Cartelera"      data={this.props.peliculas.cartelera} />
                <Estrenos title="Próximos Estrenos" data={this.state.proximosEstrenos} />
            </div>
        )
    }
}


function mapStateToProps( store ){
    return {
        peliculas: store.peliculas
    }
}

export default connect(mapStateToProps,{getCartelera})(HomePage);