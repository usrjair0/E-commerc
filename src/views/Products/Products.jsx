import { useParams } from 'react-router';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import './index.scss';
import React from 'react';

const Products = () => {
 const params = useParams()
 consol

  return (
    <div className='product'>
        <HeaderMenu/>
        <Search />
        <ProductDetail/>
    </div>
  )
}

export default Products