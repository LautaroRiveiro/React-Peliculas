import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    >ul{
        display:flex;
        overflow:scroll;
        padding-left:0px;
        background:rgba(25,25,200,1);
    }
`;

const ItemPelicula = styled.li`
    list-style:none;
    margin:5px;
    min-width:200px; 
    height:300px;
    background-size: cover;
    color:white;
    font-family: 'Chicle', cursive;
    text-align:center;
    font-size:25px;
    position:relative;
    >span{
        background:rgba(12,12,12,0.8);
        padding: 0 10px;
        display:none;
    }
    >img{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        object-fit:cover;
    }

    &:hover{
        background:rgba(25,25,25,0.5);
        >span{
            display:block;
            position:relative;
        }
        >img{
            opacity:0.5;
        }
    }
`;

export default (props) => {
    return (
        <Contenedor>
            Estrenos
            <ul>
                {
                    props.data.map((pelicula) => (
                        <ItemPelicula key={pelicula.id} img={pelicula.poster_path}>
                            <img src={"https://image.tmdb.org/t/p/w500"+pelicula.poster_path} alt=""/>
                            <span>{pelicula.title}</span>
                        </ItemPelicula>
                    ))
                }
            </ul>
        </Contenedor>
    )
}