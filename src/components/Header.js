import React from 'react';
import {Link} from 'react-router-dom';

export default ()=>(
    <div className="header">
        <Link to="/" className="link">App</Link>
        <style jsx>{`
            .header{
                background-color:black;
                height: 50px;
                width: 100%;
                color: white;
                font-size: 40px;
                padding: 10px;
                
            }
            .link{
                text-decoration: none;
                color: white;
            }
        `}
        </style>
    </div>
)