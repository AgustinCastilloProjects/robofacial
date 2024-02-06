import React, { useState } from 'react';
import './loginAluno.css';
import back from '../assets/voltar.png';

export default function LoginOutros() {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [err, setErr] = useState(false);

  const handleLogin = () => {
    if(nome && id){
      localStorage.setItem('nome', nome);
      localStorage.setItem('CPF', id);
      window.location.href = '/home';
    } else {
      setErr(true);
    }
  }

  const handleSignup = () => {
    window.location.href = '/cad'
  }

  return (
    <div className='logal-main-container'>
      <div className='home-box'>
        <img src={back} width={100} height={100} alt="Voltar ao Início" onClick={() => window.location.href = '/init'}/>
      </div>
      <div className='logal-group'>
        <div className='logal-pic'></div>
      </div>
      <div className='logal-input-wrapper'>
        <input className='logal-input' type='text' placeholder='Nome Completo' onChange={ (e) => { setNome(e.target.value); if(nome && id) setErr(false) }}/>
        <input className='logal-input' type='text' placeholder='CPF' onChange={ (e) => { setId(e.target.value); if(nome && id) setErr(false) }}/>
      </div>
      <div className='logal-box'>
        <span className='logal-text-3' onClick={handleLogin}>Login</span>
      </div>
      <div className='logal-wrapper'>
        <span className='logal-text-4'>Não tem uma conta?</span>
        <span className='logal-text-5' onClick={handleSignup}>Cadastre-se</span>
      </div>
      { err && <center><span className='logal-error'>Necessário preencher ambos os campos para realizar login</span></center>}
    </div>
  );
}
