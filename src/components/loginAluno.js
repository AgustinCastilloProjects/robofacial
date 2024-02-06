import React, { useState } from 'react';
import './loginAluno.css';
import back from '../assets/voltar.png';

export default function LoginAluno() {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [err, setErr] = useState(false);
  const [errMessage, setErrMsg] = useState('');

  const handleLogin = () => {
    if(nome && id){
      if(nome === localStorage.getItem('nomeCadastrado')){
        localStorage.setItem('RA', id);
        window.location.href = '/home';
      } else{
        setErr(true);
        setErrMsg('Usuário não cadastrado');
      }
    } else {
      setErr(true);
      setErrMsg('Preencha ambos os campos para logar!');
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
        <input className='logal-input' type='text' placeholder='Registro Academico' onChange={ (e) => { setId(e.target.value); if(nome && id) setErr(false) }}/>
      </div>
      <div className='logal-box' onClick={handleLogin}>
        <span className='logal-text-3'>Login</span>
      </div>
      <div className='logal-wrapper'>
        <span className='logal-text-4'>Não tem uma conta?</span>
        <span className='logal-text-5' onClick={handleSignup}>Cadastre-se</span>
      </div>
      { err && <center><span className='logal-error'>{errMessage}</span></center>}
    </div>
  );
}
