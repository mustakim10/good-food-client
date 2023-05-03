import React from 'react';
import banner from '../../assets/banner.avif'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='d-flex gap-5 mt-4 mx-4'>
        <div className=''>
            <h1 className='fw-bold mt-4 text-secondary'>The best  <strong className='text-primary-emphasis'>Resturent</strong></h1>
            <p className='my-4 text-secondary fs-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ut magnam amet esse, obcaecati quos optio neque quia nobis magni non delectus fugit necessitatibus voluptatibus officiis minus. Fugiat, cum temporibus!</p>
            <Button variant="outline-secondary">About Us</Button>
        </div>
        <img className='rounded' src={banner} alt="" />
    </div>
    );
};

export default Banner;