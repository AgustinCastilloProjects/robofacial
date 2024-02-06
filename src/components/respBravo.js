import React from 'react';
import './respBravo.css';

export default function RespBravo() {
  return (
    <div className='rb-main-container'>
      <div className='rb-box'>
        <span className='rb-text'>
          Você parece nervoso, posso tentar te ajudar?
        </span>
        <div className='rb-group'>
          <div className='rb-box-2'>
            <span className='rb-text-2'>
              Não
              <br />
            </span>
          </div>
          <div className='rb-box-3'>
            <span className='rb-text-3'>Sim</span>
          </div>
        </div>
      </div>
    </div>
  );
}
