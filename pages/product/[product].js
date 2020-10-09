import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Produto from '../../containers/Produto';
import Rodape from '../../containers/Rodape';

export default class ProductPage extends Component {
  render() {
    return(
     <Layout title="Tenis | SID SURF STORE">
       <Cabecalho />
       <Produto />
       <Rodape />
     </Layout>
    );
  };
};