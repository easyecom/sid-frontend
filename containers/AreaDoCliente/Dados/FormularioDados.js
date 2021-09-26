import React, { Component } from "react";

import FormSimples from "../../../components/Inputs/FormSimples";
import TextoDados from "../../../components/Texto/Dados";
import { ESTADOS } from "../../../utils";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

class FormularioDados extends Component {
  constructor(props) {
    super();
    const { cliente } = props;
    this.state = {
      addressId: cliente && cliente.addressId,
      userName: cliente && cliente.userName,
      cpf: cliente && cliente.cpf,
      email: cliente && cliente.email,
      telefone: (cliente && cliente.phone) || "",
      dataDeNascimento: cliente && cliente.dateOfBirth,
      local: cliente && cliente.street,
      numero: cliente && cliente.number,
      complemento: cliente && cliente.complement,
      bairro: cliente && cliente.neighborhood,
      cidade: cliente && cliente.city,
      estado: cliente && cliente.state,
      cep: cliente && cliente.zipcode,
    };
  }

  async componentDidMount() {
    const { token, fetchClient } = await this.props;
    if (token) fetchClient(token);
  }

  async componentDidUpdate() {
    const { token, fetchClient } = await this.props;
    if (!fetchClient) fetchClient(token);
  }

  onChangeInput(field, value) {
    this.setState({ [field]: value });
  }

  handleUpdateUser() {
    this.props.updateUser(this.state, this.props.token, (error) => {
      if (error)
        this.setState({ aviso: { status: false, message: error.message } });
      else this.setState({ aviso: null });
    });

    alert("atualizado com sucesso")
  }

  render() {
    const {
      userName,
      cpf,
      email,
      telefone,
      dataDeNascimento,
      local,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
    } = this.state;

    return (
      <div className="flex-4 conteudo-area-cliente">
        <h2>MEUS DADOS</h2>
        <br />
        <br />
        <div className="form-dados">
          <FormSimples
            value={userName}
            name="userName"
            label="Nome"
            type="text"
            placeholder="userName"
            onChange={(e) => this.onChangeInput("userName", e.target.value)}
          />
          <FormSimples
            value={cpf}
            name="cpf"
            label="CPF"
            type="text"
            placeholder="CPF"
            onChange={(e) => this.onChangeInput("cpf", e.target.value)}
          />
          <FormSimples
            value={email}
            name="email"
            label="Email"
            type="text"
            placeholder="email"
            onChange={(e) => this.onChangeInput("email", e.target.value)}
          />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                label="Telefone"
                value={telefone}
                name="telefone"
                type="text"
                placeholder="Telefone"
                onChange={(e) => this.onChangeInput("telefone", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={dataDeNascimento}
                name="dataDeNascimento"
                type="text"
                placeholder="DD/MM/YYYY"
                label="Data de Nascimento"
                onChange={(e) =>
                  this.onChangeInput("dataDeNascimento", e.target.value)
                }
              />
            </div>
          </div>
          <br />
          <div className="flex horizontal">
            <div className="flex-3">
              <FormSimples
                value={local}
                name="local"
                placeholder="Endereço"
                onChange={(e) => this.onChangeInput("local", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={numero}
                name="numero"
                placeholder="Número"
                onChange={(e) => this.onChangeInput("numero", e.target.value)}
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={bairro}
                name="bairro"
                placeholder="Bairro"
                onChange={(e) => this.onChangeInput("bairro", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={complemento}
                name="complemento"
                placeholder="Complemento"
                onChange={(e) =>
                  this.onChangeInput("complemento", e.target.value)
                }
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                label="Cidade"
                value={cidade}
                name="cidade"
                placeholder="Cidade"
                onChange={(e) => this.onChangeInput("cidade", e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Estado</label>
              <select name="estado">
                <option>Selecione seu estado</option>
                {Object.keys(ESTADOS).map((abbr) => (
                  <option key={abbr} value={abbr || estado}>
                    {ESTADOS[abbr]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <FormSimples
            value={cep}
            name="cep"
            placeholder="12345-678"
            label="cep"
            onChange={(e) => this.onChangeInput("cep", e.target.value)}
          />
        </div>
        <div className="flex flex-start">
          <button className="btn btn-primary" onClick={() => this.handleUpdateUser()}>SALVAR</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  cliente: state.client.cliente,
  updateUser: state.client.updateUser,
});

export default connect(mapStateToProps, actions)(FormularioDados);
