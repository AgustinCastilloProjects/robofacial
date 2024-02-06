import React from 'react';
import './musicaSemLogar.css';
import settings from '../assets/Settings.png';
import home from '../assets/home.png';
import back from '../assets/voltar.png';
import music from '../assets/telaMusica.png';

export default function MusicaSemLogar() {
  return (
    <div className='mus-main-container'>
      <div className='home-box'>
        <img src={settings} width={100} height={100} className='img-menu first' onClick={() => window.location.href = '/init'}/>
        <img src={home} width={100} height={100} className='img-menu' onClick={() => window.location.href = '/home'}/>
        <img src={back} width={100} height={100} onClick={() => window.location.href = '/init'}/>
      </div>
      <div className='mus-box'>
        <img src={music} alt='music' width={500} height={500} />
        <div className='mus-img-3' />
        <span className='mus-text'>
          Nome da Música
          <br />
        </span>
      </div>
    </div>
  );
}
