import React, { Component } from 'react';

import { formatMoney } from '../../../utils';
import TextoDados from '../../../components/Texto/Dados';
import TabelaSimples from '../../../components/Tabela/Simples';


class DadosDoPedido extends Component {

  renderDadosDoCliente() {
    return (
      <div className="flex-3">
        <h4 className="headline">DADOS DO CLIENTE</h4>
        <br/>
        <TextoDados chave="Nome" valor="Joao Gabriel" />
        <TextoDados chave="CPF" valor="111.222.333.44" />
        <TextoDados chave="Telefone" valor="(11) 1234-5678" />
        <TextoDados chave="Data de Nascimento" valor="11/01/1991" />
      </div>
    );
  };

  renderDadosDoCarrinho() {
    const carrinho = [
      {
        "Produto": "Meia Stance - Tam. Unico",
        "Preço Und.": formatMoney(55),
        "Quantidade": 1,
        "Preço Total": formatMoney(55)
      },
      {
        "Produto": "Short Green - M",
        "Preço Und.": formatMoney(105),
        "Quantidade": 1,
        "Preço Total": formatMoney(105)
      }
    ];
    return (
      <div className="flex-5">
        <h4 className="headline">CARRINHO</h4>
        <br/>
        <TabelaSimples
          cabecalho={[ "Produto", "Preço Und.", "Quantidade", "Preço Total" ]}
          dados={carrinho} />
      </div>
    );
  };

  renderDadosDeEntrega() {
    return (
      <div className="flex-3">
        <h4 className="headline">DADOS DE ENTREGA</h4>
        <br/>
        <TextoDados chave="Endereço" valor="Rua teste" />
        <TextoDados chave="Número" valor="123" />
        <TextoDados chave="Bairro" valor="Centro" />
        <TextoDados chave="Complemento" valor="" />
        <TextoDados chave="Cidade" valor="Mogi das Cruzes" />
        <TextoDados chave="Estado" valor="SP" />
        <TextoDados chave="CEP" valor="12345-678" />
      </div>
    );
  };

  renderDadosDePagamento() {
    return (
      <div className="flex-5">
        <h4 className="headline">DADOS DE PAGAMENTO</h4>
        <br/>
        <TextoDados chave="Taxa de Entrega" valor={formatMoney(20)} />
        <TextoDados chave="Valor do Pedido" valor={formatMoney(160)} />
        <TextoDados chave="Valor Total" valor={formatMoney(180)} />
        <TextoDados chave="Forma de Pagamento" valor="Cartão de Crédito - 2x" />
      </div>
    );
  }

  render() {
    return (
      <div className="Detalhes-do-Pedido">
        <div className="flex horizontal">
          { this.renderDadosDoCliente() }
          { this.renderDadosDoCarrinho() }
        </div>
        <div className="flex horizontal">
          { this.renderDadosDeEntrega() }
          { this.renderDadosDePagamento() }
        </div>
      </div>
    );
  };
};

export default DadosDoPedido;