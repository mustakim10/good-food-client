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
        <Container className='mt-5'>
            <h2 className='text-center fw-bold mt-4 text-secondary'>All Chefes Here </h2>
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