import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Init from './components/init';
import Audiobook from './components/audiobook';
import Cadastro from './components/cadastro';
import Desabafo from './components/desabafo';
import Home from './components/home';
import LoginAluno from './components/loginAluno';
import LoginOutros from './components/loginOutros';
import MeditacaoSemLogar from './components/meditacaoSemLogar';
import MusicaSemLogar from './components/musicaSemLogar';
import OpBravo from './components/opBravo';
import RespBravo from './components/respBravo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/ab' element={<Audiobook />} />
        <Route path='/cad' element={<Cadastro />} />
        <Route path='/desabafo' element={<Desabafo />} />
        <Route path='/home' element={<Home />} />
        <Route path='/init' element={<Init />} />
        <Route path='/loginAluno' element={<LoginAluno />} />
        <Route path='/loginOutros' element={<LoginOutros />} />
        <Route path='/medit' element={<MeditacaoSemLogar />} />
        <Route path='/musica' element={<MusicaSemLogar />} />
        <Route path='/opBravo' element={<OpBravo />} />
        <Route path='/respBravo' element={<RespBravo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
