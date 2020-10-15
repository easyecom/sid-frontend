import React, { Component } from 'react';

const PHOTOS = [
  "/static/img/meia-stance.jpg",
  "/static/img/short-green.jpg",
  "/static/img/tenis-nike-air-max.jpg"
];

export default class Hero extends Component {
  state = { fotos: PHOTOS[0] }

  renderPhotos() {
    return (
      <div className="fotos flex-2 flex vertical">
        <div className="foto-principal flex-6 flex flex-center">
          <img src={this.state.foto} width="95%" />
        </div>
        <div className="mini-fotos flex-1 flex">
          {
            PHOTOS.map((foto, index) => (
              <div
                key={index}
                className="mini-foto flex-1 flex flex-center"
                onClick={() => this.setState({ foto })}>
                <img src={foto} width="90%" />
              </div>
            ))
          }
        </div>
      </div>
    );
  };

  renderVariacoes() {
    return (
      <div>
        <div>
          <label>Selecione uma opção:</label>
        </div>
        <div className={"variacoes flex wrap"}>
          <div className="variacao flex-1 flex flex-center wrap-4">
            <span className="variacao-item">P</span>
          </div>
          <div className="variacao flex-1 flex flex-center wrap-4">
            <span className="variacao-item">M</span>
          </div>
          <div className="variacao flex-1 flex flex-center wrap-4">
            <span className="variacao-item">G</span>
          </div>
        </div>
      </div>
    )
  }

  addCart() {
    alert("Adicionado ao carrinho");
  }

  renderDetalhes() {
    return (
      <div className="flex-2 produto-detalhes">
        <div className="titulo">
          <h2>Meia Stance</h2>
        </div>
        <div className="categoria">
          <p>Categoria:&nbsp;<span className="categoria-link">Meias</span></p>
        </div>
        <br />
        <div className="precos">
          <h2 className="preco-original preco-por">
            R$ 55,00
          </h2>
          <h2 className="preco-promocao">
            R$ 45,00
          </h2>
          <h4 className="preco-parcelado">
            ou em 6x de 7,50 sem juros
          </h4>
        </div>
        <br />
        { this.renderVariacoes()}
        <div className="opcoes">
          <div className="opcao flex vertical">
            <label className="opcao-tab">Quantidade</label>
            <input
              className="opcao-input"
              type="number"
              name="quantidade"
              defaultValue={1} />
          </div>
        </div>
        <div className="comprar">
          <button
            className="btn btn-success btn-cta"
            onClick={() => this.addCart()}>
            COMPRAR
            </button>
        </div>
      </div>
    );  
  }

  render() {
    return (
      <div className="Produto-Hero flex horizontal">
        { this.renderPhotos()}
        { this.renderDetalhes()}
      </div>
    );
  };
};