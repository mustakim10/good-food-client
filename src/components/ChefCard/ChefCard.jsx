import React from 'react';

const ChefCard = ({chef}) => {
    const {name,yearsOfExperience,likes,numberOfSomething,image,food} = chef ;
    return (
        <div className='mb-4 border '>
            <img className='w-75 m-4 rounded' src={image} alt="" />
            <h3>{name}</h3>
            <hr />
            <p>Experience : {yearsOfExperience} years</p>
            <p>Recipes : {numberOfSomething} items</p>
            <p>Likes : {likes}</p>
            <button className='btn btn-secondary rounded'>View Recipes</button>
        </div>
    );
};

export default ChefCard;