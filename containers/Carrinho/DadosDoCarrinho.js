import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import { formatMoney } from "../../utils";

import { connect } from "react-redux";
import actions from "../../redux/actions";

import Frete from "../../components/Item/Frete";

import FormSimples from "../../components/Inputs/FormSimples";

const cpfDB = "98320642019";

class DadosDoCarrinho extends Component {
  state = {
    foundCPF: "",
    cpf: "",
    password: "",
  };

  onChangeInput(field, value) {
    this.setState({ [field]: value });
  }

  onChangeInputCPF(field, value) {
    this.setState({ [field]: value });

    const foundCPF = true; // api

    this.setState({ foundCPF: foundCPF });
  }

  handleDirectCheckMyData() {
    if (this.state.cpf > 11 && this.state.foundCPF == true) {
      Router.push("/checkout");
    }
  }

  handleDirectRegister() {
    if (this.state.cpf > 11 && this.state.foundCPF == false) {
      Router.push("/checkout");
      alert("Direcionando para pagina de cadastro");
    }
  }

  handleModal() {
    console.log(this.state.cpf);
    return (
      <div>
        <div id="abrirModal" class="modal">
          <div className="modalTest">
            <a href="#fechar" title="Fechar" class="fechar">
              x
            </a>
            <div>
              <div>
                <h4>Digite seu CPF</h4>
                <FormSimples
                  label=""
                  value={this.cpf}
                  name="cpf"
                  type="text"
                  placeholder=""
                  onChange={(e) =>
                    this.onChangeInputCPF(
                      "cpf",
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                />
              </div>
              {this.state.foundCPF ? (
                <div>
                  <div>
                    <h4>Digite sua senha</h4>
                    <FormSimples
                      label=""
                      value={this.password}
                      name="password"
                      type="password"
                      placeholder=""
                      onChange={(e) =>
                        this.onChangeInput("password", e.target.value)
                      }
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={() => this.handleDirectCheckMyData()}
                  >
                    Enviar
                  </button>
                </div>
              ) : (
                this.handleDirectRegister()
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDadosDoCarrinho() {
    const { carrinho, freteSelecionado } = this.props;
    const valorTotal = (carrinho || []).reduce(
      (all, item) => all + Number(item.precoUnitario) * Number(item.quantidade),
      0
    );
    return (
      <div className="dados-do-carrinho-container flex-3">
        <div className="dados-do-carrinho-item flex">
          <div className="flex-1">
            <p className="headline">Valor do Pedido:</p>
          </div>
          <div className="flex-1 flex flex-center">
            {formatMoney(valorTotal)}
          </div>
        </div>
        {/* <Frete /> */}
        <div className="dados-do-carrinho-item flex">
          <div className="flex-1">
            <p className="headline">Valor Total:</p>
          </div>
          <div className="flex-1 flex flex-center">
            {formatMoney(
              valorTotal +
                Number(
                  freteSelecionado
                    ? (freteSelecionado.Valor || "0").replace(",", ".")
                    : 0
                )
            )}
          </div>
        </div>
        <div className="dados-do-carrinho-item flex flex-right">
          <button
            className="btn btn-success btn-cta"
            onClick={() => this.handleModal()}
          >
            <a href="#abrirModal">Finalizar pedido</a>
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Dados-Do-Carrinho flex horizontal">
        <div className="flex-4"></div>
        {this.handleModal()}
        {this.renderDadosDoCarrinho()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  carrinho: state.carrinho.carrinho,
  freteSelecionado: state.carrinho.freteSelecionado,
});

export default connect(mapStateToProps, actions)(DadosDoCarrinho);
