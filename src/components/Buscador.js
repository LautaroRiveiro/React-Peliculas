import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {busqueda} from "../redux/actions/buscarAction";

const Lista = styled.ul`
    position:absolute;
    margin:0 auto;
    background-color: rgba(25,25,25,0.8);
    font-size: 20px;
    list-style: none;
    padding: 10px;
    width: 100%;
    font-family: 'Calibri';
    flex-direction: column;
    z-index:1000;
    display:none;
`;

const Item = styled(Link)`
    padding: 5px;
    text-decoration: none;
    color: white;
    &:hover{
        color: silver;
    }
`;

const Contenedor = styled.div`
    position:relative;
`;

class Buscador extends React.Component{

    onBlur  = (e)=> {
        console.info("related",e.relatedTarget);
        if(e.relatedTarget != null){
            e.preventDefault();
        } else{
            document.getElementById("lista").style.display = "none";
        }
    };

    onFocus = ()=> document.getElementById("lista").style.display = "flex";

    render(){
      return(
          <Contenedor>
              <form>
                  <label htmlFor="buscador" style={{fontSize:"18px",paddingRight:"10px"}}>Buscar:</label>
                  <input type="text" name="buscador" id="buscador" onChange={e=>this.props.busqueda(e.target.value)} onBlur={this.onBlur} onFocus={this.onFocus}/>
              </form>
              <Lista id="lista" tabindex="0">
                  {
                     this.props.peliculas.data.map( pelicula =>{
                         return(
                             <Item key={ pelicula.title } to={`/detalles/${pelicula.id}`}>{ pelicula.title }</Item>
                        )
                     })
                  }
              </Lista>
          </Contenedor>
      )
    }
}

function mapStateToProps({busqueda}){
    return{
        peliculas: busqueda
    }
}

export default connect(mapStateToProps,{busqueda})(Buscador);