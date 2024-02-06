import React from 'react';
import './loginOutros.css';

export default function LoginOutros() {
  return (
    <div className='logout-main-container'>
      <div className='logout-box'>
        <div className='logout-img'>
          <div className='logout-wrapper' />
          <div className='logout-section' />
        </div>
        <span className='logout-text'>Nome Completo</span>
        <span className='logout-text-2'>CPF</span>
      </div>
      <div className='logout-box-2'>
        <span className='logout-text-3'>Login</span>
      </div>
      <div className='logout-wrapper-2'>
        <span className='logout-text-4'>Não tem uma conta?</span>
        <span className='logout-text-5'>Cadastre-se</span>
      </div>
    </div>
  );
}
