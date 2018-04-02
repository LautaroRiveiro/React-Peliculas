import React from 'react';
import Destaque from '../components/Destaque';
import Estrenos from '../components/Estrenos';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div>HomePage</div>
                <Destaque />
                <Estrenos />
            </div>
        )
    }
}

export default HomePage;