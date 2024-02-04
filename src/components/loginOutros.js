import React from 'react';
import './loginOutros.css';

export default function LoginOutros() {
  return (
    <div className='main-container'>
      <div className='box'>
        <div className='img'>
          <div className='wrapper' />
          <div className='section' />
        </div>
        <span className='text'>Nome Completo</span>
        <span className='text-2'>CPF</span>
      </div>
      <div className='box-2'>
        <span className='text-3'>Login</span>
      </div>
      <div className='wrapper-2'>
        <span className='text-4'>Não tem uma conta?</span>
        <span className='text-5'>Cadastre-se</span>
      </div>
    </div>
  );
}
