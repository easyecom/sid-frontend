import React from 'react';

class Paginacao extends React.Component {
  render() {
    const {total, atual, limit, onClick  } = this.props;
    const numeroPaginas = Math.ceil(total / limit);
    return (
      <div className="Paginacao flex horizontal flex-center">
        {
          [...Array(numeroPaginas).keys()].map((numero, index) => {
            const numeroAtualDaPagina = numero * limit;
            return (
              <div
                key={index} onClick={() => onClick(numeroAtualDaPagina)}
                className={`paginacao-item ${numeroAtualDaPagina === atual ? 
                  "paginacao-item-active" : ""}`}>
                { numero + 1 }
              </div>
            )
          })
        }
      </div>
    );
  };
};

export default Paginacao;