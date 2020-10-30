import React, { Component } from 'react';

import { formatMoney } from '../../utils';

const PRODUTOS = [
  {
    id: 93856,
    fotos: ["/static/img/shirt-oakley.jpg"],
    titulo: "Camiseta Oakley - M",
    precoUnitario: 109,
    quantidade: 1
  },
  {
    id: 99056,
    fotos: ["/static/img/short-green.jpg"],
    titulo: "Short Estampado - G",
    precoUnitario: 55,
    quantidade: 1
  },
];

class ListaDeProdutos extends Component {

  renderCabecalhoCarrinho(semAlteracoes) {
    return (
      <div className="carrinho-cabecalho no-mb-flex flex">
        <div className="flex-4"></div>
        <div className="headline flex-1 flex flex-center">
          <h3 className="text-center">Quantidade</h3>
        </div>
        <div className="headline flex-1 flex flex-center">
          <h3 className="text-center">Preço Unitátio</h3>
        </div>
        <div className="headline flex-1 flex flex-center">
          <h3 className="text-center">Preço Total</h3>
        </div>
        { !semAlteracoes && (<div className="flex-1"></div>) }
      </div>
    );
  };

  renderProduto(item, semAlteracoes) {
    const foto = item.fotos[0];
    const nome = item.titulo;
    const { quantidade, precoUnitario } = item;
    return (
      <div key={item.id} className="carrinho-item flex">
        <div className="flex-4 flex">
          <div className="produto-image flex-2 flex flex-center">
            <img src={foto} alt={nome} width="100px" />
          </div>
          <div className="produto-titulo flex-4 flex flex-start">
            <h3 className="text-center">{nome}</h3>
          </div>
        </div>
        <div className="flex-1 flex flex-center">
          {
            semAlteracoes ?
            (<span>{quantidade}</span>) :
            (<input type="number" defaultValue={quantidade} className="produto-quantidade"/>)
          }
        </div>
        <div className="flex-1 flex flex-center">
          <span>{formatMoney(precoUnitario)}</span>
        </div>
        <div className="flex-1 flex flex-center">
          <span>{formatMoney(precoUnitario * quantidade)}</span>
        </div>
        { !semAlteracoes && (
          <div className="flex-1 flex flex-center">
            <span className="fa fa-trash"></span>
          </div>
        )}
      </div>
    )
  }

  renderProdutos(semAlteracoes) {
    return PRODUTOS.map((item) => this.renderProduto(item, semAlteracoes))
  }

  render() {
    const { semAlteracoes } = this.props;

    return (
      <div className="Lista-De-Produtos flex vertical">
        { this.renderCabecalhoCarrinho(semAlteracoes) }
        { this.renderProdutos(semAlteracoes) }
      </div>
    );
  };
};

export default ListaDeProdutos;