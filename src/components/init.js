import React from 'react';
import './init.css';
import Emocoes from './api/Emocoes';

export default function Init() {
  return (
    <>
      <div className='main-container'>
      <Emocoes />
        <span className='text'>Você é:</span>
        <div className='section'>
          <div className='group'>
            <span className='text-2'>Aluno</span>
          </div>
          <div className='box'>
            <span className='text-3'>Professor</span>
          </div>
          <div className='box-2'>
            <span className='text-4'>Servidor</span>
          </div>
        </div>
      </div>
    </>
  );
}
