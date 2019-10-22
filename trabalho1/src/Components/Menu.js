//Trabalho de Web4 -- Alunos: Milena de Souza Camargo e Raphael Valencio.
import React from 'react';

import Logo from '../img/logo.png';
import './Menu.scss';


const Menu = () => {
  return (
    <div>
      <div className='menu'>
        <img className="logo" src={Logo} alt="" />
        <h1>Anime Planet</h1>
      </div>
    </div>
  )
};

export default Menu;

