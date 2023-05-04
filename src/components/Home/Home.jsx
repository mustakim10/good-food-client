import React from 'react';
import Chefes from '../Chefes/Chefes';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Extra from '../Extra/Extra';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefes></Chefes>
            <About></About>
            <Extra></Extra>

        </div>
    );
};

export default Home;