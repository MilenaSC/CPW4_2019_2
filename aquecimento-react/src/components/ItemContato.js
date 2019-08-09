import React, { Component } from 'react';

import './ItemContato.css';

class ItemContato extends Component {
    render() {
        return (
            <div>
                <div className = "itemContato">
                    <img src = {this.props.icone} alt = "Contato"></img>
                    <span id = "descricao">{this.props.descricao}</span>
                    :
                    <span id = "contato">{this.props.contato}</span>
                </div>
            </div>
        );
    }
}

export default ItemContato;