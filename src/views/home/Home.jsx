import React from 'react';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/Search'
import Productscard from '../../components/ProductsCard/Productscard';
import "./index.scss";

const Home = ({data}) => {
  return (
    <div className='home'>
        <HeaderMenu/>
        <Search />
        <div className="home__products">
        {data.map((product) =>( //o parenteses significa que estamos retornando um html
        <Productscard key={product.id} data={product}/>
        ))}
        </div>
    </div>
  )
}

export default Home