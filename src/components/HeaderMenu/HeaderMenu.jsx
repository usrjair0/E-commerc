import React from 'react'
import './index.scss'
import logoDNC from '../../assets/logo.svg';
import shopcart from '../../assets/shopcart.svg'

function HeaderMenu() {
  return (
    <header className='HeaderMenu'>
      <div className='HeaderMenu__logotext'>
      <img src={logoDNC} alt="logo" />
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      </div>
      <div className='HeaderMenu__shopcart'>
        <p>Meu carrinho</p>
        <img src={shopcart} alt="cartLogo" />
      </div>
      
    </header>
  )
}

export default HeaderMenu