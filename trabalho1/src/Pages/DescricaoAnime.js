import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './DescricaoAnime.scss';
import paginaAnterior from '../img/anterior.png';

export default class DescricaoAnime extends Component {
    constructor(props) {
      super(props);

      this.state = {
          anime: this.props.location.state.listaAnime,
      }
    }

    componentDidMount() {
        console.log(this.props.location.state.listaAnime);
    }
  render() {
    return (
        <div>
          <div className="Nav">
            <Link to="/"><img src={paginaAnterior} alt="Voltar"/></Link>
          </div>
          <div className="Thumbnail">
            <img src={this.state.anime.image_url} alt=""/>
          </div>
          <div className="Titulo">
            <h1>{this.state.anime.title}</h1>
          </div>
          <div className="Descricao">
            <p>Sinopse: {this.state.anime.synopsis}</p>
          </div>
        </div>
    );
  }
}
