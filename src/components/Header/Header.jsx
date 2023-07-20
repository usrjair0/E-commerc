import React from 'react';
import './index.scss'
import logoDNC from '../../assets/logo.svg';


function Header() {
  return (
    <div className='header'>
        <img src={logoDNC} alt="logodnc" />
    </div>
  )
}

export default Header