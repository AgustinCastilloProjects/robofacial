import React from 'react';
import './init.css';

export default function Init() {
  return (
    <div className='init-main-container'>
      <span className='init-text'>Você é:</span>
      <div className='init-section'>
        <button onClick={ () => window.location.href = '/loginAluno'} className='init-btn'>
          <div className='init-group'>
            <span className='init-text-2'>Aluno</span>
          </div>
        </button>
        <button onClick={ () => window.location.href = '/loginOutros'} className='init-btn'>
        <div className='init-box'>
          <span className='init-text-3'>Professor</span>
        </div>
        </button>
        <button onClick={ () => window.location.href = '/loginOutros'} className='init-btn'>
        <div className='init-box-2'>
          <span className='init-text-4'>Servidor</span>
        </div>
        </button>
      </div>
    </div>
  );
}
