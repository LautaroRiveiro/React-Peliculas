import React from 'react';
import styled from 'styled-components';

const Contenedor = styled.div`
    >ul{
        color:green;
    }
`;

export default (props) => {
    return (
        <Contenedor>
            Estrenos
            <ul>
                {
                    props.data.map( (pelicula)=>(
                        <li key={pelicula.id}>{pelicula.title}</li>
                    ) )
                }
            </ul>
        </Contenedor>
    )
}