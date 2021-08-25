import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { formatMoney } from "../../utils";
import { addCart } from "../../utils/cart";
import { getCountItemsCart } from "../../utils/cart";
import DataContext from "../Context/DataContext";

const size = ["38", "39", "40"];

class Hero extends Component {
  static contextType = DataContext;

  constructor(props) {
    super();
    const { produto } = props;
    this.state = {
      foto: produto.variations
        ? produto.variations[0].images[0].path || null
        : null,
      fotos: produto.variations
        ? produto.variations[0].images.map((item) => item.path) || []
        : [],
      qtd: 1,
      variacao:
        produto.variations && produto.variations.length >= 1
          ? produto.variations[0].variationId
          : null,
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.produto.variations && this.props.produto.variations) {
      const { fotos } = this.props.produto.variations[0].images.map(
        (item) => item.path
      );
      this.setState({ foto: fotos[0], fotos });
    }
    if (!prevProps.produto.variations && this.props.produto.variations) {
      const variacao = this.props.produto.variations[0];
      if (!variacao) return null;
      this.setState({ variacao: variacao[0].variationId });
    }
  }

  renderPhotos() {
    return (
      <div className="fotos flex-2 flex vertical">
        <div className="box-images flex flex-1">
          <div className="mini-fotos">
            {this.state.fotos.map((foto, index) => (
              <div
                key={index}
                className="mini-foto flex-1 flex flex-center"
                onClick={() => this.setState({ foto })}
              >
                <img src={foto} width="90%" />
              </div>
            ))}
          </div>
          <div className="foto-principal flex-6 flex flex-center">
            <img src={this.state.foto} width="95%" />
          </div>
        </div>
      </div>
    );
  }

  renderVariacoesColor() {
    const { produto } = this.props;

    return (
      <div>
        <div className="titleProductDetails">
          <label>COR</label>
        </div>
        <div className={"variacoes flex wrap"}>
          {produto.variations.map((item) => {
            return (
              <div
                className={`${
                  item.quantity
                    ? "variacao-item-color"
                    : "variacao-item-color-empty"
                } flex-1 flex flex-center wrap-4`}
              >
                <span className="item-color">
                  <img  
                    src={
                      item.images && item.images.length
                        ? item.images[0].path
                        : ""
                    }
                    width="35"
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  renderVariacoesSize(title) {
    const { produto } = this.props;

    return (
      <div>
        <div className="titleProductDetails">
          <label>TAMANHO</label>
        </div>
        <div className={"variacoes flex wrap"}>
          {produto.variations.map((item) => {
            return (
              <div
                className={`${
                  item.quantity
                    ? "variacao-item-size"
                    : "variacao-item-size-empty"
                } flex-1 flex flex-center wrap-4`}
              >
                <span className="item-size">{item.size}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  addCart() {
    const { variacao, qtd } = this.state;
    const { produto } = this.props;

    addCart(
      {
        productName: produto.productName,
        produto: produto.productId,
        variacao,
        quantidade: qtd,
        precoUnitario: produto.variations[0].offerPrice
          ? produto.variations[0].offerPrice
          : produto.variations[0].prices,
        foto: produto.variations[0].images[0].path || null,
      },
      true
    );
    this.context.updateQtd(getCountItemsCart());
  }

  renderDetalhes() {
    const { produto } = this.props;

    return (
      <div className="flex-1 produto-detalhes">
        <div className="categoria">
          <p>
            Categoria:&nbsp;
            <span className="categoria-link">{produto.categoryName}</span>
          </p>
        </div>
        <div className="titulo">
          <h2>{produto.variations[0].variationName}</h2>
        </div>
        <br />
        <div className="precos">
          <h2 className="preco-original preco-por">
            {formatMoney(produto.variations[0].prices)}
          </h2>
          <h2 className="preco-promocao">
            {formatMoney(produto.variations[0].offerPrice) ||
              produto.variations[0].prices}
          </h2>
          <h4 className="preco-parcelado">
            ou em 6x de{" "}
            {formatMoney(produto.variations[0].offerPrice / 6) ||
              produto.variations[0].prices / 6}{" "}
            sem juros
          </h4>
        </div>
        <br />
        {this.renderVariacoesColor()}
        {this.renderVariacoesSize()}

        <div className="opcoes">
          <div className="opcao flex vertical">
            <label className="titleProductDetails">QUANTIDADE:</label>
            <input
              className="opcao-input"
              type="number"
              name="quantidade"
              defaultValue={1}
            />
          </div>
        </div>
        <div className="comprar">
          <Link href="/cart">
            <button
              className="btn btn-success btn-cta btn-product-details"
              onClick={() => this.addCart()}
            >
              COMPRAR AGORA
            </button>
          </Link>
          <button
            className="btn btn-cta btn-add btn-product-details"
            onClick={() => this.addCart()}
          >
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Produto-Hero flex horizontal">
        {this.renderPhotos()}
        {this.renderDetalhes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  produto: state.produto.produto,
  variacoes: state.produto.variacoes,
  token: state.auth.token,
});

export default connect(mapStateToProps)(Hero);
