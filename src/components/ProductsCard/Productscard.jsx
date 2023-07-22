import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function Productscard({data}) {
  return (
    <div className='home__card'>
        <img src={data.imgPath} alt="model" />
        <div className='home__card-description'>
        <p>{data.title}</p>
        <button>
          <Link to={`./products/${data.id}`}>Comprar Look</Link>
        </button>
        </div>
    </div>
  )
}

export default Productscard