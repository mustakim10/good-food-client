import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    const {name,yearsOfExperience,likes,number,image,food,bio} = details ;
    return (
        <Container>
            <img className='mx auto' src={image} alt="" />
            <h3 className='my-4'>Name : {name}</h3>
            <p><strong>BioData : </strong>{bio}</p>
            <p><strong>Experience :</strong> {yearsOfExperience} years</p>
            <p><strong>Recipes :</strong> {number} items</p>
            <p><strong>Food :</strong> {food}</p>
            <p><strong>Likes :</strong> {likes}</p>
        </Container>
    );
};

export default ChefDetails;