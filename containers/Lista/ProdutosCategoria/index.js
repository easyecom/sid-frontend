import React, { Component } from "react";

import Produtos from "../../../components/Listas/Produtos";
import Paginacao from "../../../components/Paginacao";
import { connect } from "react-redux";

class ProdutosCategoria extends Component {
  state = {
    atual: 0,
    limit: 20,
  };

  render() {
    const { produtosCategoria, categoria } = this.props;
    // console.log(produtosCategoria, categoria);
    return (
      <div className="container Categoria-Produtos">
        <h1>{categoria ? categoria[0].categoryName : "-"}</h1>
        <br /> <br />
        <div className="flex flex-center"></div>
        <br />
        <Produtos
          produtos={produtosCategoria ? produtosCategoria : []}
          itensPorLinha={4}
        />
        {/* <Paginacao
          atual={this.state.atual || 0}
          // total={PRODUTOS.length * 4}
          limite={this.state.limit}
          onClick={(numeroAtual) => this.state({ atual: numeroAtual })}
        /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoria: state.categoria.categoria,
  produtosCategoria: state.categoria.produtosCategoria,
});

export default connect(mapStateToProps)(ProdutosCategoria);
