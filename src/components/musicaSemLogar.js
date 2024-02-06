import React from 'react';
import './musicaSemLogar.css';

export default function MusicaSemLogar() {
  return (
    <div className='mus-main-container'>
      <div className='mus-img' />
      <div className='mus-box'>
        <div className='mus-img-2' />
        <div className='mus-img-3' />
        <span className='mus-text'>
          Nome da Música
          <br />
        </span>
      </div>
    </div>
  );
}
