import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();
    const {name,yearsOfExperience,likes,number,image,food,bio} = details ;
    return (
        <div>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{bio}</p>
            <p>{yearsOfExperience}</p>
            <p>{number}</p>
            <p>{food}</p>
            <p>{likes}</p>
        </div>
    );
};

export default ChefDetails;