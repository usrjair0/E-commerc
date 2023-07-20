import React from 'react'
import './index.scss'
import person from '../../assets/person.svg';
import heart from '../../assets/heart.svg'
import search from '../../assets/search.svg'

function Search() {
  return (
    <div className='search'>
      <div className='search__logo'>
      <input type="text" placeholder='O que você está procurando?' />
      <img src={search} alt="procurar" />
      </div>
      <img src={person} alt="pessoa" />
      <img src={heart} alt="coração" />
    </div>
  )
}

export default Search