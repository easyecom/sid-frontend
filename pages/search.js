import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import ProdutosPesquisa from '../containers/Lista/ProdutosPesquisa';
import Rodape from '../containers/Rodape';

export default class Search extends Component {
  render() {
    return(
      <Layout title="Resultados para | SID SURF STORE">
        <Cabecalho />
        <ProdutosPesquisa />
        <Rodape />
      </Layout>
    );
  };
};