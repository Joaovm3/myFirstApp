import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; //importando o valor em reais

import React from 'react';

//Tag View = pode ser utilziada no lugar de uma DIV
//Tag Text = qualquer tipo de texto, parágrafo, negrito, etc

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}
