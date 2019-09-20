import React, { Component } from 'react';

import Menu from '../../components/menu/Menu';
import paginaAnterior from '../../img/paginaAnterior.png';

export default class Lista extends Component {

    constructor(props){
        super(props);

        this.state = {
            lista: this.props.location.state.lista
        };
    }

    render() { 
        return (
            <div>
                <Menu
                    logo={paginaAnterior}
                    paginaAnterior="/"
                    titulo="Minha lista" />
                Lista
            </div>
        );
    }
}
