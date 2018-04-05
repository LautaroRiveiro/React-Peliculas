import React from 'react';
import {Link} from 'react-router-dom';
import Buscador from './Buscador';

export default (props)=>(
    <div className="header">
        <Link to="/" className="link">App</Link>

        <Buscador></Buscador>

        <div id="fecha">{props.fecha.toLocaleString()}</div>

        <style jsx>{`
            .header{
                background-color:black;
                height: 50px;
                max-width: 100%;
                color: white;
                font-size: 40px;
                padding: 10px;
                display:flex;
                justify-content:space-between;
                align-items: center;
            }
            .link{
                text-decoration: none;
                color: white;
            }
            #fecha{
                font-size: 18px;
            }
        `}
        </style>
    </div>
)