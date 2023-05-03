import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Container } from 'react-bootstrap';
import './Chefes.css'

const Chefes = () => {
    const [chefes , setChefes] = useState([]);

    useEffect(() => {
        fetch('https://good-food-server-mustakim10.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefes(data))
        .catch(error => console.log(error))
    } ,[])
    return (
        <Container className='mt-5'>
            <h2 className='text-center fw-bold mt-4 text-secondary'>All Chefes Here </h2>
            <div className='chefes grid row row-cols-2'>
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