import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; //BrowserRouter é um router que fica por volta de todas as rotas

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> 
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

/** o caminho precisa ser EXACT exatamente ESSE para o Login no ROUTE do Logon*/