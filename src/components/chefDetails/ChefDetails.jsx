import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    const {name,yearsOfExperience,likes,number,image,food,bio,recipes} = details ;
    return (
        <Container>
            <img className='mx auto w-50' src={image} alt="" />
            <h3 className='my-4'>Name : {name}</h3>
            <p><strong>BioData : </strong>{bio}</p>
            <p><strong>Experience :</strong> {yearsOfExperience} years</p>
            <p><strong>Recipes :</strong> {number} items</p>
            <p><strong>Food :</strong> {food}</p>
            <p><strong>Likes :</strong> {likes} peoples</p>
            <h2 className='text-center fw-bold my-4'>Recipe</h2>
            <div className='d-flex p-2 m-2 gap-5'>
<div>
    <img className='w-75 rounded' src={recipes[0].img} alt="" />
    <h4 className='my-4'>{recipes[0].name}</h4>
    <p>{recipes[0].ingredients}</p>
    <p>{recipes[0].method}</p>
    <p>Rating : {recipes[0].rating}</p>
    <button>frv</button>
</div>
<div>
<img className='w-75 rounded' src={recipes[1].img} alt="" />
    <h4 className='my-4'>{recipes[1].name}</h4>
    <p>{recipes[1].ingredients}</p>
    <p>{recipes[1].method}</p>
    <p>Rating : {recipes[1].rating}</p>
    <button>frv</button>
</div>
<div>
<img className='w-50 rounded' src={recipes[2].img} alt="" />
    <h4 className='my-4'>{recipes[2].name}</h4>
    <p>{recipes[2].ingredients}</p>
    <p>{recipes[2].method}</p>
    <p>Rating : {recipes[2].rating}</p>
    <button>frv</button>
</div>
            </div>
        </Container>
    );
};

export default ChefDetails;