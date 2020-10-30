import React, { Component } from 'react';

import AlertGeral from '../../components/Alert/Geral';

class SubmitDadosCliente extends Component {
  render() {
    return (
      <div>
        <AlertGeral show={true} msg="E-mail já usado na loja" />
        <div className="flex flex-right">
          <button 
            className="btn btn-success btn-cta"
            onClick={() => console.log('Continuar pedido')}>
              CONTINUAR PEDIDO
          </button>
        </div>
      </div>
    );
  };
};

export default SubmitDadosCliente;