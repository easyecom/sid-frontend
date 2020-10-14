import React from 'react';

const DESC = "Produtos originais.\n\nSuper estilosos e confortáveis\n\nInvista em você!";

const Descricao = () => (
  <div className="Descricao flex vertical">
    <h2>Descricao</h2>
    <br/>
    <div>
      {DESC.split("\n").map((item, idx) => <p key={idx}>{item}</p>)}
    </div>
  </div>
)

export default Descricao;