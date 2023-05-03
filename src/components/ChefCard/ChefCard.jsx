import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {name,yearsOfExperience,likes,numberOfSomething,image,food} = chef ;
    return (
        <div className='mb-4 border mt-5'>
            <img className='w-75 m-4 rounded' src={image} alt="" />
            <h3>{name}</h3>
            <hr />
            <p><strong>Experience :</strong> {yearsOfExperience} years</p>
            <p><strong>Recipes :</strong> {numberOfSomething} items</p>
            <p><strong>Likes :</strong> {likes}</p>
            <Link to={`/details/${chef.id}`}><button className='btn btn-secondary mb-2 rounded'>View Recipes</button></Link>
        </div>
    );
};

export default ChefCard;