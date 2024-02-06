import React from 'react';
import './desabafo.css';
import desImg from '../assets/TelaDesabafo.png';
import home from '../assets/home.png';
import back from '../assets/voltar.png';
import settings from '../assets/Settings.png';

export default function Desabafo() {
  return (
    <div className='main-container'>
      <div className='home-box'>
        <img src={home} width={100} height={100} className='img-menu' alt='Ir Para Home' onClick={() => window.location.href = '/home'}/>
        <img src={back} width={100} height={100} alt="Voltar ao Início" onClick={() => {localStorage.removeItem('nome'); window.location.href = '/init'}}/>
        <p className='logoutlabel'>Logout</p>
      </div>
      <div className='desabafo-container'>
        <img className='desImg' src={desImg} width={300} height={300}/>
      </div>     
      <div className='rowdes'>
        <p>Sinta-se a vontade para desabafar, este desabafo será completamente anônimo</p>
      </div>
      <div className='rowdes'>
        <textarea rows={10} className='tades' cols={100}/>
      </div>
      <div className='rowdes'>
        <button type='button' className='btnenviar' onClick={() => window.location.href = '/home'}>Enviar</button>
      </div>
      
    </div>
  );
}
