import React from 'react';
import axios from 'axios';
import Destaque from '../components/Destaque';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getDetalle, getActores} from '../redux/actions/detalleAction';

const Actores = styled.div`
    display: flex;
    overflow: scroll;
    background: rgba(25,25,25,1);
`;

const Actor = styled.div`
    border: 1px solid black;
    background: url(${({ img, name }) => img ? 'https://image.tmdb.org/t/p/w185' + img : 'https://dummyimage.com/185/000/fff&text=' + name }) no-repeat center;
    background-size: cover;
    height: 200px;
    min-width: 150px;
    margin: 5px;
    position:relative;
    >span{
        color:white;
        background:rgba(25,25,25,0.5);
        font-family:'Calibri';
        position:absolute;
        bottom: 0px;
        padding: 5px;
    }
`;

class DetallesPage extends React.Component {

    state = {
        //detalle: {},
        //actores: []
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        //this.traerDetalle(id);
        //this.trearActores(id);
        console.info("DetallePage.PROPS",this.props);
        this.props.getDetalle(id);
        this.props.getActores(id);
    }

    /*
        traerDetalle = async (id) => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es`);
                this.setState({
                    detalle: res.data
                });
            } catch (error) {
                console.error(error);
            }
        }
    */
    /*
        trearActores = async (id) => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=3b4a278d61b1cf1d1cf38e59c74e49ab&language=es`);
                this.setState({
                    actores: res.data.cast
                });
            } catch (error) {
                console.error(error);
            }

        }
    */
    render() {
        return (
            <div>
                <Destaque pelicula={this.props.detalle.data} />
                <Actores>
                    {
                        this.props.detalle.actores.map(actor => (
                            <Actor key={actor.cast_id} img={actor.profile_path} name={actor.name[0]}>
                                <span>{actor.name}</span>
                            </Actor>
                        ))
                    }
                </Actores>
            </div>
        )
    }
}

function mapStateToProps(store){
    return{
        detalle: store.detalle
    }
}

export default connect(mapStateToProps,{getDetalle,getActores})(DetallesPage);