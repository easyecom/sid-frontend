import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';

import { ESTADOS } from '../../../utils';

class CadastroContainer extends Component {
  state = {
    email: "",
    senha: "",

    nome: "",
    cpf: "",
    telefone: "",
    dataDeNascimento: "",

    local: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    CEP: ""
  }

  render() {
    const {
      email, senha, nome, cpf, telefone, dataDeNascimento,
      local, numero, complemento, bairro, cidade, estado, CEP
    } = this.state;
    return (
      <div className="Cadastro-Container">
        <h2 className="text-center">Criar Conta</h2>
        <br />
        <br />
        <div className="from-cadastro">
          <FormSimples
            value={email} name="email" type="email" placeholder="Email" />
          <FormSimples
            value={senha} name="senha" type="password" placeholder="Senha" />
          <br />
          <FormSimples
            value={nome} name="nome" type="text" placeholder="Nome" />
          <FormSimples
            value={cpf} name="cpf" type="text" placeholder="CPF" />
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples label="Telefone"
                value={telefone} name="telefone" type="text" placeholder="Telefone" />
            </div>
            <div className="flex-1">
              <FormSimples
                value={dataDeNascimento} name="dataDeNascimento"
                type="text" placeholder="DD/MM/YYYY" label="Data de Nascimento" />
            </div>
          </div>
          <br />
          <div className="flex horizontal">
            <div className="flex-3">
              <FormSimples
                value={local} name="local" placeholder="Endereço" />
            </div>
            <div className="flex-1">
            <FormSimples
              value={numero} name="numero" placeholder="Número" />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples
                value={bairro} name="bairro" placeholder="Bairro" />
            </div>
            <div className="flex-1">
              <FormSimples
                value={complemento} name="complemento" placeholder="Complemento" />
            </div>
          </div>
          <div className="flex horizontal">
            <div className="flex-1">
              <FormSimples label="Cidade"
                value={cidade} name="cidade" placeholder="Cidade" />
            </div>
              <div className="form-input">
                <label>Estado</label>
                <select name="estado">
                  <option>Selecione seu estado</option>
                  {Object.keys(ESTADOS).map(
                    (abbr) => (<option key={abbr} value={abbr}>{ESTADOS[abbr]}</option>)
                  ) }
                </select>
              </div>
          </div>
          
          <FormSimples value={CEP} name="CEP" placeholder="12345-678" label="CEP" />
          <div className="flex flex-center">
            <button className="btn btn-primary">
              CADASTRAR
            </button>
          </div>
          <br/>
          <hr/>
          <div className="link-acesso text-center">
                <span onClick={this.props.changeAcesso}>Já tem conta? Clique aqui para logar</span>
          </div>
        </div>
      </div>
    );
  };
};

export default CadastroContainer;