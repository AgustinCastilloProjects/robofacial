import React from 'react';
import './meditacaoSemLogar.css';
import settings from '../assets/Settings.png';
import home from '../assets/home.png';
import back from '../assets/voltar.png';

export default function MeditacaoSemLogar() {
  return (
    <div className='medit-main-container'>
      <div className='home-box'>
        <img src={home} width={100} height={100} className='img-menu' alt='Ir Para Home' onClick={() => window.location.href = '/home'}/>
        <img src={back} width={100} height={100} alt="Voltar ao Início" onClick={() => {localStorage.removeItem('nome'); window.location.href = '/init'}}/>
        <p className='logoutlabel'>Logout</p>
      </div>
      <div className='bigCircle'>
        <div className='innerCircle'>
          <span className='innerText'>Inspire/Expire</span>
        </div>
      </div>
    </div>
  );
}
