import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimeService from '../Services/AnimeService';
import pesquisar from '../img/lupa.png';
import './PaginaPrincipal.scss';

export default class PaginaPrincipal extends Component {
    constructor(){
      super();
      
      this.state = {
        animesList: [],
        nome: '', 
      }

      this.service = new AnimeService();
      this.aoBuscar = this.aoBuscar.bind(this);
    }

   aoAlterar = (event) => {
    const nome = event.target.value;
     this.setState({ nome })
    }

    async aoBuscar(){
      const anime = this.state.nome;
      const animesList = await this.service.listaAnimes(anime);
      this.setState({ animesList: animesList.results }); 
    }
  render() {
    const lista = this.state.animesList.map(listaAnime => (
      <div className='animes' key={listaAnime.mal_id}>
        <div className='Box'>
          <img src={listaAnime.image_url} alt={listaAnime.title} />
          <div className='Title'>
            <Link to={{ pathname: '/anime/'+listaAnime.mal_id, state:{listaAnime}}}> <span className="animeLink">{listaAnime.title}</span> </Link>
          </div>
        </div>
      </div>
    ));
    
    return (
        <div>
          <div className='pesquisa'>
          <input className="pesquisa-txt" type="text" onChange={this.aoAlterar} name="nome" value={this.state.nome} required />
            <button className="botaoPesquisar" onClick={this.aoBuscar}><img src={pesquisar} alt="Busca"/></button>
          </div>
          <div>
            {lista}
          </div>
            
        </div>
    );
  }
}
