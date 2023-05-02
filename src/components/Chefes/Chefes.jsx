import React, { useEffect, useState } from 'react';

const Chefes = () => {
    const [chefes , setChefes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    } ,[])
    return (
        <div>
            <h2>this is chefes section</h2>
        </div>
    );
};

export default Chefes;