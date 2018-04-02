import React from 'react';
import Destaque from '../components/Destaque';
import Estrenos from '../components/Estrenos';
import axios from 'axios';

class HomePage extends React.Component {

    state = {
        resultados: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        try {
            const resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es');
            this.setState({
                resultados: resultados.data.results
            })
        } catch (error) {
            console.info("error", error);
        }
    }


    render() {
        return (
            <div>
                <div>HomePage</div>
                <Destaque />
                <Estrenos data={ this.state.resultados } />
            </div>
        )
    }
}

export default HomePage;