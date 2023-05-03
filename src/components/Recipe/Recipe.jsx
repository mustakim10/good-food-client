import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({r}) => {
    const [fav, setFav] = useState(true);
    const handleToast = () => {
        setFav(false);
        toast('Added to Favorite')
    }
    return (
        <div>
            <div>
                    <img className='w-75 rounded' src={r.img} alt="" />
                    <h4 className='my-4'>{r.name}</h4>
                    <p>{r.ingredients}</p>
                    <p>{r.method}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Rating : {r.rating}</p>
                        <button disabled={!fav} onClick={handleToast}><FaHeart></FaHeart></button>
                    </div>
          </div>
          <ToastContainer />
        </div>
    );
};

export default Recipe;