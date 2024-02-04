import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className='main-container'>
      <div className='box'>
        <div className='pic' />
        <div className='img' />
      </div>
      <div className='img-2'>
        <span className='text'>
          AudioBook
          <br />
          <br />
        </span>
      </div>
      <div className='group'>
        <div className='pic-2' />
        <div className='img-3' />
        <div className='pic-3' />
        <span className='text-2'>Música</span>
        <span className='text-3'>
          Desabafe
          <br />
        </span>
        <span className='text-4'>
          Meditação
          <br />
        </span>
      </div>
      <div className='img-4' />
      <div className='img-5' />
    </div>
  );
}
