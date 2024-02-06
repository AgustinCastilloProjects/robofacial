import React, { useState } from 'react';
import './cadastro.css';
import checkImg from '../assets/check.jpg';

export default function Cadastro() {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [ra, setRA] = useState('');
  const [tel, setTel] = useState('');
  const [dataNasc, setDataNasc] = useState(new Date());
  const [genero, SetGenero] = useState('');
  const [raca, SetRaca] = useState('');
  const [renda, setRenda] = useState('');
  const [moradia, setMoradia] = useState('');
  const [emprego, setEmprego] = useState('');
  const [cel, setCel] = useState('');
  const [sw, setSw] = useState('');
  const [note, setNote] = useState('');
  const [internet, setInternet] = useState('');
  const [social, setSocial] = useState('');
  const [curso, setCurso] = useState('');
  const [situacao, setSituacao] = useState('');
  const [dist, setDist] = useState('');
  const [disturbios, setDisturbios] = useState('');
  const [alimentacao, setAlimentacao] = useState('');
  const [sono, setSono] = useState('');

  const steps = [
    'Identificação',
    'Perfil Socioeconômico',
    'Perfil Tecnológico',
    'Perfil Estudantil',
    'Perfil de Saúde',
    'Cadastre-se'
  ];

  const handleCadastrar = () => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('nomeCadastrado', nome);
    window.location.href = '/home'
  }

  return (
    <div className='main-container'>
      <div className='content-container'>
        <div className='progress-bar'>
          <div className='number -complete'>
            <span>1</span>
          </div>
          <div className={ (step === 1) ? 'bar -ongoing' : 'bar -complete'} />
          <div className={ (step >= 2) ? 'number -complete' : 'number'}>
            <span>2</span>
          </div>
          <div className={ (step < 2) ? 'bar' : (step === 2) ? 'bar -ongoing' : 'bar -complete'} />
          <div className={ (step >= 3) ? 'number -complete' : 'number'}>
            <span>3</span>
          </div>
          <div className={ (step < 3) ? 'bar' : (step === 3) ? 'bar -ongoing' : 'bar -complete'} />
          <div className={ (step >= 4) ? 'number -complete' : 'number'}>
            <span>4</span>
          </div>
          <div className={ (step < 4) ? 'bar' : (step === 4) ? 'bar -ongoing' : 'bar -complete'} />
          <div className={ (step >= 5) ? 'number -complete' : 'number'}>
            <span>5</span>
          </div>
          <div className={ (step < 5) ? 'bar' : (step === 5) ? 'bar -ongoing' : 'bar -complete'} />
          <div className={ (step >= 6) ? 'number -complete' : 'number'}>
            <span>6</span>
          </div>
        </div>
        < hr className='divisor'/>
        <div className='form-wrapper'>
          <h1 className={(step === 6) ? 'title -center' : 'title'}>{steps[step -1]}</h1>
          { step === 1 &&
          <>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Nome Completo</label>
                <input type='text' className='txt-input' placeholder='Ex: John Doe' onChange={ (e) => setNome(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Registro Acadêmico</label>
                <input type='text' className='txt-input' placeholder='000000' onChange={ (e) => setRA(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Telefone</label>
                <input type='text' className='txt-input' placeholder='DDD 9 9999-9999' onChange={ (e) => setTel(e.target.value)}/>
              </div>
            </div>
          </>
          }
          { step === 2 &&
          <>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Data de Nascimento</label>
                <input type='date' className='txt-input'onChange={ (e) => setDataNasc(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Gênero</label>
                <input type='text' className='txt-input' onChange={ (e) => SetGenero(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Raça</label>
                <input type='text' className='txt-input' onChange={ (e) => SetRaca(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Renda Mensal</label>
                <input type='text' className='txt-input' onChange={ (e) => setRenda(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Situação de Moradia</label>
                <input type='text' className='txt-input' placeholder='(Com os pais, Aluguel, Casa própria)' onChange={ (e) => setMoradia(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Situação de emprego</label>
                <input type='text' className='txt-input' placeholder='(Desempregado, Estagio, CLT ou Autonomo)' onChange={ (e) => setEmprego(e.target.value)}/>
              </div>
            </div>
          </>
          }
          { step === 3 &&
          <>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Celular</label>
                <input type='text' className='txt-input' placeholder='(Sim ou Não)' onChange={ (e) => setCel(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Possui Smartwatch?</label>
                <input type='text' className='txt-input' placeholder='(Sim ou Não)' onChange={ (e) => setSw(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Possui Notebook?</label>
                <input type='text' className='txt-input' placeholder='(Sim ou Não)' onChange={ (e) => setNote(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Acesso à internet</label>
                <input type='text' className='txt-input' placeholder='(Residencial, Móvel ou Ambos)' onChange={ (e) => setInternet(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Utiliza redes sociais</label>
                <input type='text' className='txt-input' placeholder='(Sim ou Não)' onChange={ (e) => setSocial(e.target.value)}/>
              </div>
            </div>
          </>
          }
          { step === 4 &&
          <>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Curso</label>
                <input type='text' className='txt-input' placeholder='(BCC ou EnC)' onChange={ (e) => setCurso(e.target.value)}/>
              </div>
              <div className='input-wrapper'>
                <label className='input-label'>Situação</label>
                <input type='text' className='txt-input' placeholder='(Atrasado, Em Perfil, Adiantado)' onChange={ (e) => setSituacao(e.target.value)}/>
              </div>
            </div>
          </>
          }
          { step === 5 &&
          <>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Sofre algum Disturbio</label>
                <input type='text' className='txt-input' placeholder='(Sim ou Não)' onChange={ (e) => setDist(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Qual(is)</label>
                <input type='text' className='txt-input' placeholder='(Sim ou Não)' onChange={ (e) => setDisturbios(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Hábitos alimentares</label>
                <input type='text' className='txt-input' placeholder='(Ruim, Regular ou Bom)' onChange={ (e) => setAlimentacao(e.target.value)}/>
              </div>
            </div>
            <div className='row'>
              <div className='input-wrapper'>
                <label className='input-label'>Hábitos de sono</label>
                <input type='text' className='txt-input' placeholder='(Ruim, Regular ou Bom)' onChange={ (e) => setSono(e.target.value)}/>
              </div>
            </div>
          </>
          }
          { step === 6 &&
          <>
            <div className='row -center'>
              <img src={checkImg} width={300} height={300} />
            </div>
            <div className='row -center final'>
              <p>Por favor, revise as informações fornecidas e clique em submeter para completar o processo de cadastro</p>
            </div>
          </>
          }
        </div>
        <div className='row'>
          { step > 1 && <button className='btn-voltar' onClick={() => setStep(step-1)}>Voltar</button> }
          { step < 6 && <button className='btn-avancar' onClick={() => setStep(step+1)}>Avançar</button> }
          { step === 6 && <button className='btn-avancar' onClick={handleCadastrar}>Submeter</button> }
        </div>
      </div>
    </div>
    
  );
}
