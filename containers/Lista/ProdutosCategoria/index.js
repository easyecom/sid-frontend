import React, { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';
import Paginacao from '../../../components/Paginacao';

const PRODUTOS = [
  { id: 1, fotos: ["/static/img/shirt-oakley.jpg"], titulo: "Camiseta Oakley", preco: 129, promocao: 109 },
  { id: 2, fotos: ["/static/img/short-green.jpg"], titulo: "Short Estampado", preco: 55, promocao: 55 },
  { id: 3, fotos: ["/static/img/tenis-nike-air-max.jpg"], titulo: "Tenis da nike air max", preco: 599, promocao: 429 },
  { id: 4, fotos: ["/static/img/meia-stance.jpg"], titulo: "Meia stance", preco: 160, promocao: 150 },
  { id: 5, fotos: ["/static/img/shirt-oakley.jpg"], titulo: "Camiseta Oakley", preco: 129, promocao: 109 },
  { id: 6, fotos: ["/static/img/short-green.jpg"], titulo: "Short Estampado", preco: 55, promocao: 55 },
  { id: 7, fotos: ["/static/img/tenis-nike-air-max.jpg"], titulo: "Tenis da nike air max", preco: 599, promocao: 429 },
  { id: 8, fotos: ["/static/img/meia-stance.jpg"], titulo: "Meia stance", preco: 160, promocao: 150 },
  { id: 9, fotos: ["/static/img/shirt-oakley.jpg"], titulo: "Camiseta Oakley", preco: 129, promocao: 109 },
  { id: 10, fotos: ["/static/img/short-green.jpg"], titulo: "Short Estampado", preco: 55, promocao: 55 },
  { id: 11, fotos: ["/static/img/tenis-nike-air-max.jpg"], titulo: "Tenis da nike air max", preco: 599, promocao: 429 },
  { id: 12, fotos: ["/static/img/meia-stance.jpg"], titulo: "Meia stance", preco: 160, promocao: 150 },
  { id: 13, fotos: ["/static/img/shirt-oakley.jpg"], titulo: "Camiseta Oakley", preco: 129, promocao: 109 },
  { id: 14, fotos: ["/static/img/short-green.jpg"], titulo: "Short Estampado", preco: 55, promocao: 55 },
  { id: 15, fotos: ["/static/img/tenis-nike-air-max.jpg"], titulo: "Tenis da nike air max", preco: 599, promocao: 429 },
  { id: 16, fotos: ["/static/img/meia-stance.jpg"], titulo: "Meia stance", preco: 160, promocao: 150 },
];

class ProdutosCategoria extends Component {
  state = { atual: 0}

  render() {
    return (
      <div className="container Categoria-Produtos">
        <br/> <br/>
        <div className="flex flex-center">
          <h1>ACESSÓRIOS</h1>
        </div>
        <br />
        <Produtos
          produtos={PRODUTOS}
          itensPorLinha={4} />
        <Paginacao
          atual={this.state.atual || 0}
          total={PRODUTOS.length * 4}
          limite={PRODUTOS.length}
          onClick={(numeroAtual) => this.state({ atual: numeroAtual })} />
      </div>
    );
  };
};

export default ProdutosCategoria;