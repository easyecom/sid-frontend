import React, { Component } from 'react';

import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
import Banners from '../containers/Banners';
import Beneficios from '../containers/Beneficios';
// import ProdutosPaginaInicial from '../containers/ProdutosPaginaInicial';
// import Rodape from '../containers/Rodape';


class Index extends Component {

  render() {
    return (
      <Layout title="Sid Surf Store | Estilo e bom gosto">
        <Cabecalho  />
        <Banners />
        <Beneficios />
        {/* <ProdutosPaginaInicial />
        <Rodape /> */}
      </Layout>

    )
  }
}

export default Index;