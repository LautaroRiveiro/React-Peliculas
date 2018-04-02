import React from 'react';
import Destaque from '../components/Destaque';
import Estrenos from '../components/Estrenos';
import axios from 'axios';

class HomePage extends React.Component {

    state = {
        resultados: [],
        peliculaDestacada: "",
        proximosEstrenos: []
    }

    componentDidMount() {
        this.getData();
        this.getProximosEstrenos();
    }

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
    }

    getProximosEstrenos = async ()=>{
        try {
            const proximosEstrenos = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es');
            this.setState({
                proximosEstrenos: proximosEstrenos.data.results
            })
        } catch (error) {
            console.info("errores",error);
        }

    }

    render() {
        return (
            <div>
                <Destaque pelicula={this.state.peliculaDestacada} />
                <Estrenos title="En Cartelera"      data={this.state.resultados} />
                <Estrenos title="Próximos Estrenos" data={this.state.proximosEstrenos} />
            </div>
        )
    }
}

export default HomePage;