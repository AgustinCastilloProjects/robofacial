import React from 'react';
import './respBravo.css';

export default function RespBravo() {
  return (
    <div className='rb-main-container'>
      <div className='rb-box'>
        <span className='rb-text'>
          Você parece nervoso, posso tentar te ajudar?
        </span>
        <div className='rowbtns'>
          <button type='button' className='btn-nao' onClick={() => window.location.href = '/init'}>Não</button>
          <button type='button' className='btn-sim' onClick={ () => window.location.href = '/home'}>Sim</button>
        </div>
      </div>
    </div>
  );
}
