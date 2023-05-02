import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Container } from 'react-bootstrap';

const Chefes = () => {
    const [chefes , setChefes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefes(data))
        .catch(error => console.log(error))
    } ,[])
    return (
        <Container>
            <h2>All Chefes Here : {chefes.length}</h2>
            <div className='grid row row-cols-2 '>
            {
                chefes.map(chef => <ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
            }
            </div>
        </Container>
    );
};

export default Chefes;