import React from 'react';
import './home.css';
import btnMusica from '../assets/btnMusica.png';
import btnMeditacao from '../assets/btnMeditacao.png';
import btndesabafo from '../assets/btndesabafo.png';
import btnAudiobook from '../assets/AudioBook.png';
import settings from '../assets/Settings.png';
import home from '../assets/home.png';
import back from '../assets/voltar.png';

export default function Home() {
  return (
    <div className='home-main-container'>
      <div className='home-box'>
        <img src={settings} width={100} height={100} className='img-menu first' onClick={() => window.location.href = '/init'}/>
        <img src={home} width={100} height={100} className='img-menu' onClick={() => window.location.href = '/home'}/>
        <img src={back} width={100} height={100} onClick={() => window.location.href = '/init'}/>
      </div>
      <div className='rowHome'>
        <h1>Olá {localStorage.getItem('nome')}, seja Bem-Vinde!</h1>
      </div>
      <div className='home-btn-section'>
        <button className='btn-musica' alt='botão de música' onClick={ () => window.location.href = '/musica'}>
          <center><img src={btnMusica} width={100} height={100} className='home-btn-img'/></center>
          <span className='btn-text'>Musica</span>
        </button>
        <button className='btn-musica' alt='botão de meditação' onClick={ () => window.location.href = '/medit'}>
          <center><img src={btnMeditacao} width={100} height={100} className='home-btn-img'/></center>
          <span className='btn-text'>Meditação</span>
        </button>
        <button className='btn-musica' alt='botão de desabafo' onClick={ () => window.location.href = '/desabafo'}>
          <center><img src={btndesabafo} width={100} height={100} className='home-btn-img'/></center>
          <span className='btn-text'>Desabafe</span>
        </button>
        <button className='btn-musica' alt='botão de audiobook' onClick={ () => window.location.href = '/ab'}>
          <center><img src={btnAudiobook} width={100} height={100} className='home-btn-img'/></center>
          <span className='btn-text'>AudioBook</span>
        </button>
      </div>
     
    </div>
  );
}
