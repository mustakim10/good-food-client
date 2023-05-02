import React from 'react';
import banner from '../../assets/banner.avif'

const Banner = () => {
    return (
        <div className='d-flex gap-5 mx-4'>
        <div className=''>
            <h2>The best resturent</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut magnam amet esse, obcaecati quos optio neque quia nobis magni non delectus fugit necessitatibus voluptatibus officiis minus. Fugiat, cum temporibus!</p>
            <button>About Us</button>
        </div>
        <img className='rounded' src={banner} alt="" />
    </div>
    );
};

export default Banner;