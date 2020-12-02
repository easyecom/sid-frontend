import React from 'react';
import { connect } from 'react-redux';

class DadosDaLoja extends React.Component {
  render() {

    const result = this.props;
    console.log(result)

    // const { storeName, cnpj, email, cellPhone } = this.props.loja;
    
    return (
      <div></div>
      // <div className="flex-1 dados-da-loja">
      //   <div>
      //     <h2>Entre em Contato</h2>
      //     <br />
      //   </div>
      //   <p className="loja-nome">Nome: {storeName}</p>
      //   <p className="loja-cnpj">CNPJ: {cnpj}</p>
      //   <p className="loja-nome">E-mail: <a href={`mailto:${email}`}>{email}</a></p>
      //   <p className="loja-telefones">Telefones:</p>
      //   <p className="loja-telefone">&nbsp;&nbsp;<a href={`phone:${cellPhone}`}>{cellPhone}</a></p>
      //   {/* <p className="loja-endereço">{endereco.local}, {endereco.numero} - {endereco.bairro}</p>
      //   <p className="loja-cidade">{endereco.cidade} - {endereco.cep}</p> */}
      // </div>
    )
  }
}

const mapStateToProps = state => ({
  loja: state.loja.loja
});

export default connect(mapStateToProps)(DadosDaLoja);