import React from 'react';
import './loginAluno.css';

export default function LoginAluno() {
  return (
    <div className='main-container'>
      <div className='group'>
        <div className='pic'>
          <div className='section' />
          <div className='section-2' />
        </div>
        <span className='text'>Nome Completo</span>
        <span className='text-2'> Registro Academico</span>
      </div>
      <div className='box'>
        <span className='text-3'>Login</span>
      </div>
      <div className='wrapper'>
        <span className='text-4'>Não tem uma conta?</span>
        <span className='text-5'>Cadastre-se</span>
      </div>
    </div>
  );
}
