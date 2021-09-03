import React, { Component } from "react";

import FormSimples from "../../../components/Inputs/FormSimples";
import { connect } from "react-redux";
import actions from "../../../redux/actions";

import { ESTADOS } from "../../../utils";
import { getCookie } from "../../../utils/cookie";

import { 
  formatCPF, 
  formatCEP,
  formatDataDeNascimento, 
  formatNumber, 
  formatTelefone 
} from '../../../utils/format';
import { validateCPF, validateEmail } from '../../../utils/validate';

class CadastroContainer extends Component {
  state = {
    userName: "",
    email: "",
    password: "",
    cpf: "",
    cellphone: "", //TODO - add cellphone on the backend
    dateOfBirth: "",
    zipcode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    state_code: "",
    country: "",
    storeIdToAddress: 1,
  };

  onChangeInput(field, value) {
    this.setState({ [field]:  value});
  }

  handleRegistryCustomer() {
    this.props.newClient(this.state, 1, (error) => {
      if (error)
        this.setState({ aviso: { status: false, message: error.message } });
      else this.setState({ aviso: null });
    });
  }

  render() {
    const {
      email,
      password,
      userName,
      cpf,
      cellphone,
      dateOfBirth,
      zipcode,
      street,
      number,
      complement,
      neighborhood,
      city,
      state,
      state_code,
      country,
    } = this.state;

    return (
      <div className="Cadastro-Container">
        <h2 className="text-center">Criar Conta</h2>
        <br />
        <br />
        <div className="from-cadastro">
          <FormSimples
            value={email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => this.onChangeInput("email", e.target.value)}
          />
          <FormSimples
            value={password}
            name="password"
            type="password"
            placeholder="password"
            onChange={(e) => this.onChangeInput("password", e.target.value)}
          />
          <br />
          <FormSimples
            value={userName}
            name="userName"
            type="text"
            placeholder="userName"
            onChange={(e) => this.onChangeInput("userName", e.target.value)}
          />
          <FormSimples
            value={cpf}
            name="cpf"
            type="text"
            placeholder="CPF"
            onChange={(e) => this.onChangeInput("cpf", formatCPF(e.target.value))}
          />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                label="cellphone"
                value={cellphone}
                name="cellphone"
                type="text"
                placeholder="cellphone"
                onChange={(e) => this.onChangeInput("cellphone", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={dateOfBirth}
                name="dateOfBirth"
                type="text"
                placeholder="DD/MM/YYYY"
                label="dateOfBirth"
                onChange={(e) => this.onChangeInput("dateOfBirth", formatDataDeNascimento(e.target.value))}
              />
            </div>
          </div>
          <br />
          <div className="flex horizontal">
            <div className="flex-3">
              <FormSimples
                value={street}
                name="street"
                placeholder="Endereço"
                label="street"
                onChange={(e) => this.onChangeInput("street", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={number}
                name="numero"
                placeholder="Número"
                label="Numero"
                onChange={(e) => this.onChangeInput("number", formatNumber(e.target.value))}
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={neighborhood}
                name="bairro"
                placeholder="Bairro"
                label="Bairro"
                onChange={(e) => this.onChangeInput("neighborhood", e.target.value)}
              />
            </div>
            <div className="flex-1">
              <FormSimples
                value={complement}
                name="complemento"
                placeholder="Complemento"
                label="Complemento"
                onChange={(e) => this.onChangeInput("complement", e.target.value)}
              />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                label="Cidade"
                value={city}
                name="cidade"
                placeholder="Cidade"
                label="Cidade"
                onChange={(e) => this.onChangeInput("city", e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Estado</label>
              <select
                name="state_code"
                value={state_code}
                onChange={(e) => this.onChangeInput("state_code", e.target.value)}
              >
                <option>Selecione seu estado</option>
                {Object.keys(ESTADOS).map((abbr) => (
                  <option key={abbr}>{ESTADOS[abbr]}</option>
                ))}
              </select>
            </div>
          </div>

          <FormSimples
            value={zipcode}
            name="CEP"
            placeholder="12345-678"
            label="CEP"
            onChange={(e) => this.onChangeInput("zipcode", formatCEP(e.target.value))}
          />
          <div className="flex flex-center">
            <button
              className="btn btn-primary"
              onClick={() => this.handleRegistryCustomer()}
            >
              CADASTRAR
            </button>
          </div>
          <br />
          <hr />
          <div className="link-acesso text-center">
            <span onClick={this.props.changeAcesso}>
              Já tem conta? Clique aqui para logar
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(CadastroContainer);
