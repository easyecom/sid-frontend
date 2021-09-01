import React, { Component } from "react";

import { connect } from "react-redux";
import actions from "../../../redux/actions";
import FormSimples from "../../../components/Inputs/FormSimples";

class LoginContainer extends Component {
  state = {
    email: "",
    senha: "",
  };

  onChangeInput(field, e) {
    this.setState({ [field]: e.target.value });
  }

  handleLogin() {
    console.log(actions, "actions")
    const { email, senha } = this.state;

    if (!email || !senha) alert("Favor inserir email e senha");
    this.props.autenticar({ email, password: senha }, false, (error) => {
      if (error)
        this.setState({ aviso: { status: false, message: error.message } });
      else this.setState({ aviso: null });
    });

    console.log(this.props, "=====>");
    // console.log(senha, "=====>");
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div className="Login-Container">
        <h2 className="text-center">Minha Conta</h2>
        <br />
        <br />
        <div className="form-input">
          <FormSimples
            value={email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => this.onChangeInput("email", e)}
          />
          <FormSimples
            value={senha}
            name="senha"
            type="password"
            placeholder="Senha"
            onChange={(e) => this.onChangeInput("senha", e)}
          />
          <br />
          <div className="flex flex-center">
            <button
              className="btn btn-primary"
              onClick={() => this.handleLogin()}
            >
              ENTRAR
            </button>
          </div>
          <br />
          <hr />
          <div className="link-acesso text-center">
            <span onClick={this.props.changeAcesso}>
              Não tem conta? Clique aqui para cadastrar
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(LoginContainer);
