import React from 'react';
import styled from 'styled-components'

const Inicio = styled.div`
    font-family: 'Chicle', cursive;
    background: rgba(51,77,45,1);
    color: white;
`;

export default ({pelicula}) => {
    return (
        <Inicio>
            <div>Pelicula destacada</div>
            <p>{pelicula.title}</p>
        </Inicio>
    )
}