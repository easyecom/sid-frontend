import React, { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';
import Paginacao from '../../../components/Paginacao';
import { connect } from 'react-redux';


class ProdutosCategoria extends Component {
  state = { 
    atual: 0,
    limit: 20
  }

  render() {
    const result = this.props;
    console.log(result)
    return (
      <div className="container Categoria-Produtos">
        <br/> <br/>
        {/* <div className="flex flex-center">
          <h1>{categoria ? categoria.categoryName : "-"}</h1>
        </div>
        <br />
        <Produtos
          produtos={produtosCategoria ? produtosCategoria : []}
          itensPorLinha={4} />
        <Paginacao
          atual={this.state.atual || 0}
          // total={PRODUTOS.length * 4}
          limite={this.state.limit}
          onClick={(numeroAtual) => this.state({ atual: numeroAtual })} /> */}
      </div>
    );
  };
};

const mapStateToProps = state => ({
  categoria: state.categoria.categoria,
  produtosCategoria: state.categoria.produtosCategoria
})

export default connect(mapStateToProps)(ProdutosCategoria);