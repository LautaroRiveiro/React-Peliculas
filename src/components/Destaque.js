import React from 'react';
import styled from 'styled-components'

const Banner = styled.div`
    font-family: 'Chicle', cursive;
    background: rgba(51,77,45,1);
    color: white;
    position:relative;
    height:600px;

    >h3{
        position:relative;
        z-index:100;
        font-family:'Verdana';
        color: silver;
        text-shadow: 2px 2px #000000;
        margin:0px;
        padding-top:10px;
    }

    >.main-banner-img{
        position:absolute;
        top:0;
        left:0;
        object-fit:cover;
        width:100%;
        height:100%;
    }

    >.main-banner-data{
        position:absolute;
        top     : 20%;
        min-height  : 30%;
        width   : 30%;
        background:rgba(20,20,20,0.5);
        padding:10px;

        >h3{
            text-align:center;
            font-size: 30px;
            margin-top:0;
        }

        >p{
            font-family: 'Calibri';
            color:orange;
        }
    }
`;

export default ({ pelicula }) => {
    return (
        <div>
            <Banner>
                <h3>Pelicula destacada</h3>
                <img src={"https://image.tmdb.org/t/p/w1280" + pelicula.backdrop_path} alt="" className="main-banner-img" />
                <div className="main-banner-data">
                    <h3>{pelicula.title}</h3>
                    <p>{pelicula.overview}</p>
                </div>
            </Banner>
        </div>
    )
}