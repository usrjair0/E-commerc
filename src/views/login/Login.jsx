import React from 'react';
import "./index.scss";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Login = () => {
  return (
    <section className='login'>
        <Header/>
        <form className='login__form'>
          <h1>Acesse com seu login ou cadastre-se!</h1>
          <h3>Você pode entrar com seu CPF</h3>
          <div className='login__input-wrapper'>
            <label htmlFor='name' className='label'>Digite o seu CPF:</label> 
            <input type="text" placeholder='Nome completo' id='name' className='login__input-name'/><br/>
            <label htmlFor='name'>senha:</label>
            <input type='password' placeholder='**********' id='password' className='login__input-password'/>
          </div>
            <Link to={"/home"}><button type='submit'>Entrar</button></Link>
        </form>
    </section>
  )
}

export default Login;