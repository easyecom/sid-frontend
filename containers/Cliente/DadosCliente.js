import React, { Component } from "react";
import FormSimples from "../../components/Inputs/FormSimples";
import TextField from "@material-ui/core/TextField";

export default class DadosClienteContainer extends Component {
  state = {
    email: "",
    senha: "",
    confirmeSenha: "",
    nome: "",
    CPF: "",
    telefone: "",
    dataDeNascimento: "",
  };

  onChangeInput = (field, value) => this.setState({ [field]: value });

  renderDadosRegistro() {
    const { email, senha, confirmeSenha } = this.state;

    return (
      <div className="flex-1 flex vertical">
        <div className="textField">
          <TextField
            id="outlined-required"
            required
            label="email"
            fullWidth={true}
            variant="outlined"
            value={email || " "}
            onChange={(event) =>
              this.onChangeInput("email", event.target.value)
            }
          />
        </div>
        <div className="textField">
          <TextField
            id="outlined-required"
            required
            label="senha"
            fullWidth={true}
            variant="outlined"
            value={senha || " "}
            onChange={(event) =>
              this.onChangeInput("senha", event.target.value)
            }
          />
        </div>
        <div className="textField">
          <TextField
            id="outlined-required"
            required
            label="confirme sua senha"
            fullWidth={true}
            variant="outlined"
            value={confirmeSenha || " "}
            onChange={(event) =>
              this.onChangeInput("confirmeSenha", event.target.value)
            }
          />
        </div>
      </div>
    );
  }

  renderDadosUsuario() {
    const { nome, CPF, dataDeNascimento, telefone } = this.state;
    return (
      <div className="flex-1 flex vertical">
        <div className="flex-1">
          <TextField
            id="outlined-required"
            required
            label="nome"
            fullWidth={true}
            variant="outlined"
            value={nome || " "}
            onChange={(event) => this.onChangeInput("nome", event.target.value)}
          />
        </div>
        <div className="flex-1">
          <TextField
            id="outlined-required"
            required
            label="CPF"
            fullWidth={true}
            variant="outlined"
            value={CPF || " "}
            onChange={(event) => this.onChangeInput("CPF", event.target.value)}
          />
        </div>
        <div className="flex-1">
          <TextField
            id="outlined-required"
            required
            label="dataDeNascimento"
            fullWidth={true}
            variant="outlined"
            value={dataDeNascimento || " "}
            onChange={(event) =>
              this.onChangeInput("dataDeNascimento", event.target.value)
            }
          />
        </div>
        <div className="flex-1">
          <TextField
            id="outlined-required"
            required
            label="telefone"
            fullWidth={true}
            variant="outlined"
            value={telefone || " "}
            onChange={(event) =>
              this.onChangeInput("telefone", event.target.value)
            }
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="flex-1">
        <div>
          <h2>DADOS DO CLIENTE</h2>
        </div>
        {this.renderDadosRegistro()}
        {this.renderDadosUsuario()}
      </div>
    );
  }
}
