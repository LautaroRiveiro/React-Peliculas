import React from 'react';
import styled from 'styled-components'

const Inicio = styled.div`
    font-family: 'Chicle', cursive;
    background: rgba(51,77,45,1);
    color: white;
`;

export default () => {
    return (
        <Inicio>
            <div>Pelicula destacada</div>
        </Inicio>
    )
}