import React, { Component } from 'react';

import FormRadio from '../../components/Inputs/FormRadio';
import TextField from '@material-ui/core/TextField';

class DadosPagamento extends Component {
  state = {
    opcaoPagamentoSelecionado: "cartao",
    CPF: ""
  }

  renderOpcoesPagamento() {
    const { opcaoPagamentoSelecionado } = this.state;

    return (
      <div className="flex horizontal Dados_Pagamento">
        <div>
          <FormRadio
            name="tipo_pagamento_selecionado"
            checked={opcaoPagamentoSelecionado === "cartao"}
            onChange={() => this.setState({ "opcaoPagamentoSelecionado": "cartao" })}
            label="Cartão de Crédito" />
        </div>
        <div>
          <FormRadio
            name="tipo_pagamento_selecionado"
            checked={opcaoPagamentoSelecionado === "boleto"}
            onChange={() => this.setState({ "opcaoPagamentoSelecionado": "boleto" })}
            label="Boleto Bancário" />
        </div>
      </div>
    );
  };

  onChange = (field, e) => this.setState({ [field]: e.target.value });

  renderPagamentoComBoleto() {
    const { CPF } = this.state;
    return (
      <div className="Dados-Pagamento">
        <div className="text-field_input pagamento-input-boleto">
          <TextField
            id="outlined-required"
            required
            label="CPF"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={CPF}
            onChange={(e) => this.onChange("CPF", e)} />
        </div>
      </div>
    );
  };

  renderPagamentoComCartao() {
    const { nomeCartao, numeroCartao, CVCartao, mesCartao, anoCartao } = this.state;
    return (
      <div className="Dados-Pagamento">
        <div className="text-field_input pagamento-input">
          <TextField
            id="outlined-required"
            required
            label="Número do cartão"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={numeroCartao}
            onChange={(e) => this.onChange("numeroCartao", e)} />
        </div>
        <div className="flex horizontal">
          <div className="flex-1 text-field_input pagamento-input">
            <TextField
              id="outlined-required"
              required
              label="Nome do titular"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              value={nomeCartao}
              onChange={(e) => this.onChange("nomeCartao", e)} />
          </div>
        </div>
        <div className="flex text-field_input pagamento-input">
          <TextField
            id="outlined-required"
            required
            label="Mês"
            placeholder="MM"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={mesCartao}
            onChange={(e) => this.onChange("mesCartao", e)}
          />
          <TextField
            id="outlined-required"
            required
            label="Ano"
            style={{ marginLeft: 8 }}
            placeholder="AAAA"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={anoCartao}
            onChange={(e) => this.onChange("anoCartao", e)} />
          <TextField
            id="outlined-required"
            required
            label="Código de segurança"
            style={{ marginLeft: 8 }}
            placeholder="XXX"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={CVCartao}
            onChange={(e) => this.onChange("CVCartao", e)} />
        </div>
        <div className="flex">
          <TextField
            id="outlined-select-currency-native"
            select
            label="Parcelas"
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            <option>Selecione a quantidade de parcelas</option>
            <option value="1">1x de R$ 105,00 sem juros</option>
            <option value="2">2x de R$ 62,50 sem juros</option>
            <option value="3">3x de R$ 35,00 sem juros</option>
            <option value="4">4x de R$ 31,75 sem juros</option>
            <option value="5">5x de R$ 21,00 sem juros</option>
            <option value="6">6x de R$ 17,50 sem juros</option>
          </TextField>
        </div>
      </div>
    );
  }

  render() {
    const { opcaoPagamentoSelecionado } = this.state;

    return (
      <div className="Dados-Pagamento-Container">
        {this.renderOpcoesPagamento()}
        {opcaoPagamentoSelecionado === "boleto" && this.renderPagamentoComBoleto()}
        {opcaoPagamentoSelecionado === "cartao" && this.renderPagamentoComCartao()}
      </div>
    );
  };
};

export default DadosPagamento;