import React from 'react';
import './respBravo.css';

export default function RespBravo() {
  return (
    <div className='main-container'>
      <div className='box'>
        <span className='text'>
          Você parece nervoso, posso tentar te ajudar?
        </span>
        <div className='group'>
          <div className='box-2'>
            <span className='text-2'>
              Não
              <br />
            </span>
          </div>
          <div className='box-3'>
            <span className='text-3'>Sim</span>
          </div>
        </div>
      </div>
    </div>
  );
}
