import React, { Component } from "react";
import axios from "axios";
import Router from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

import { formatMoney } from "../../utils";
import { API, loja } from "../../config";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import FormSimples from "../../components/Inputs/FormSimples";
import { getToken } from "../../utils/token";

class DadosDoCarrinho extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      foundCPF: "",
      cpf: "",
      password: "",
      localToken: "",
    };
  }

  async checkClientExist(field, value) {
    this.setState({ [field]: value });

    const { data } = await axios.post(
      `${API}/stores/${loja}/clients/check-customer`,
      {
        cpf: String(value),
      }
    );

    this.setState({ [field]: value });

    if (this.state.cpf.length >= 11 && data.clientExist == true) {
      console.log(data, "client already exist");
      return this.setState({ foundCPF: data.clientExist });
    }

    if (this.state.cpf.length >= 11 && data.clientExist == false) {
      alert("Direcionando para pagina de cadastro");
      console.log(this.state.cpf, "client does not exist");
      return Router.push("/checkout");
    }
  }

  onChangeInput(field, value) {
    this.setState({ [field]: value });
  }

  handleDirectCheckMyData() {
    if (
      (this.state.cpf >= 11 && this.state.foundCPF == true) ||
      this.state.localToken
    ) {
      Router.push("/atualizacaoDadosEntrega");
    }
  }

  async componentDidMount() {
    const { token, fetchClient } = await this.props;
    if (token) await fetchClient(token);
    this.setState({ localToken: getToken() });
  }

  async handleLogin() {
    this.setState({ loading: true });

    const { password } = this.state;
    const { autenticar, cliente } = this.props;

    await autenticar(
      { email: "tirulipa@gmail.com", password },
      false,
      (error) => {
        if (error) {
          this.setState({ aviso: { status: false, message: error.message } });
          alert(
            "Usuario não existe, faça um cadastro ou entre com outra conta"
          );
        }
        this.setState({ aviso: null });
      }
    );

    if (cliente) {
      this.setState({ loading: false });

      this.handleDirectCheckMyData();
    }
  }

  handleModal() {
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
                    this.checkClientExist(
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
                    onClick={() => this.handleLogin()}
                  >
                    Enviar
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDadosDoCarrinho() {
    console.log(this.state.localToken, "localToken");
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
            onClick={() =>
              this.state.localToken
                ? this.handleDirectCheckMyData()
                : this.handleModal()
            }
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
        {!this.state.localToken ? this.handleModal() : ""}
        {this.renderDadosDoCarrinho()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  carrinho: state.carrinho.carrinho,
  freteSelecionado: state.carrinho.freteSelecionado,
  check_client: state.client.check_client_exist,
  cliente: state.client.cliente,
  token: state.auth.token,
});

export default connect(mapStateToProps, actions)(DadosDoCarrinho);
