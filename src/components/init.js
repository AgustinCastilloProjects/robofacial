import React from 'react';
import './init.css';

export default function Init() {
  return (
    <div className='main-container'>
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
  );
}
