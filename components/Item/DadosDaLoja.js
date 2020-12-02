import React from 'react';
import { connect } from 'react-redux';


class DadosDaLoja extends React.Component {

  render() {
    if (!this.props.loja) return (<div></div>);
    const { loja } = this.props
    return (
      <div className="flex-1 dados-da-loja">
        <div>
          <h2>Entre em Contato</h2>
          <br />
        </div>

        {
          loja.map(lojas => (
            <>
              <p className="loja-nome">Nome: {lojas.storeName}</p>
              <p className="loja-cnpj">CNPJ: {lojas.cnpj}</p>
              <p className="loja-nome">E-mail: <a href={`mailto:${lojas.email}`}>{lojas.email}</a></p>
              <p className="loja-telefones">Telefones: <a href={`phone:${lojas.cellPhone}`}>{lojas.cellPhone}</a></p>
              {/* <p className="loja-endereço">{endereco.local}, {endereco.numero} - {endereco.bairro}</p>
              <p className="loja-cidade">{endereco.cidadade}/{endereco.estado} - {endereco.cep}</p> */}
            </>
          ))
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  loja: state.loja.loja
});

export default connect(mapStateToProps)(DadosDaLoja);