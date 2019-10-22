import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Principal from './Pages/PaginaPrincipal';
import Descricao from './Pages/DescricaoAnime';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal}  />
                <Route path="/anime/:id" component={Descricao} />
            </Switch>
        </BrowserRouter>
    );
}
    
export default Rotas;