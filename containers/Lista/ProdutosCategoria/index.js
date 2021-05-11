import React, { Component } from "react";

import Produtos from "../../../components/Listas/Produtos";
import Paginacao from "../../../components/Paginacao";

import { connect } from "react-redux";
import actions from '../../../redux/actions';


class ProdutosCategoria extends Component {
  state = {
    atual: 0,
    limit: 20,
  };

  getProdutos() {
    const { atual, limit } = this.state;
    const categoria = this.props;
    this.props.fetchProdutosCategoria(categoria.categoryId, atual, limit);
  }

  changeNumeroAtual = (atual) => {
    this.setState({ atual }, () => this.getProdutos());
  }


  render() {
    const { produtosCategoria, categoria } = this.props;
    console.log(produtosCategoria)
    return (
      <div className="container Categoria-Produtos">
        {/* ajuste -[0] */}
        <br /> <br />
        <div className="flex flex-center">
          <h1>{categoria ? categoria.categoryName : "-"}</h1>
        </div>
        <br />
        <Produtos
          produtos={produtosCategoria ? produtosCategoria : []}
          itensPorLinha={4}
        />
        <Paginacao
          atual={this.state.atual || 1}
          total={produtosCategoria.params.total}
          limit={this.state.limit}
          onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual) } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoria: state.categoria.categoria,
  produtosCategoria: state.categoria.produtosCategoria,
});

export default connect(mapStateToProps, actions)(ProdutosCategoria);
