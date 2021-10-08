import React, { Component } from "react";

import Layout from "../components/Layout";

import Cabecalho from "../containers/Cabecalho";
import AtualizacaoDadosEntrega from "../containers/Carrinho/AtualizacaoDadosEntrega";
import Rodape from "../containers/Rodape";

export default class CheckClientPage extends Component {
  render() {
    return (
      <Layout title="Ckeckout | LOJA SID SURF STORE">
        <Cabecalho simples title={"Atualização de endereço"} />
        <AtualizacaoDadosEntrega />
        <Rodape />
      </Layout>
    );
  }
}
