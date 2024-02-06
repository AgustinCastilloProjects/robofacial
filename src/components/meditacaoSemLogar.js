import React from 'react';
import './meditacaoSemLogar.css';
import settings from '../assets/Settings.png';
import home from '../assets/home.png';
import back from '../assets/voltar.png';

export default function MeditacaoSemLogar() {
  return (
    <div className='medit-main-container'>
      <div className='home-box'>
        <img src={settings} width={100} height={100} className='img-menu first' onClick={() => window.location.href = '/init'}/>
        <img src={home} width={100} height={100} className='img-menu' onClick={() => window.location.href = '/home'}/>
        <img src={back} width={100} height={100} onClick={() => window.location.href = '/init'}/>
      </div>
      <div className='bigCircle'>
        <div className='innerCircle'>
          <span className='innerText'>Inspire/Expire</span>
        </div>
      </div>
    </div>
  );
}
