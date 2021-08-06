import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AreaDoClienteContainer from '../../containers/AreaDoCliente';
import Rodape from '../../containers/Rodape';

export default class CustomerArea extends Component {
  render() {
    return(
     <Layout title="Minha Conta | LOJA SID SURF STORE">
       <Cabecalho simples/>
       <AreaDoClienteContainer />
       <Rodape />
     </Layout>
    );
  };
};