import React from 'react';

const DadosDaLoja = () => (
  <div className="flex-1 dados-da-loja">
    <div>
      <h2>Entre em Contato</h2>
      <br/>
    </div>
    <p className="loja-nome">Nome: Loja SID</p> 
    <p className="loja-cnpj">CNPJ: 12.546.987/0001-07</p>
    <p className="loja-nome">E-mail: <a href="mailto:sid@gmail.com">sid@gmail.com</a></p>
    <p className="loja-telefones">Telefones:</p>
    <p className="loja-telefone">&nbsp;&nbsp;<a href="phone: (11) 1234-5678">(11) 1234-5678</a></p>
    <p className="loja-telefone">&nbsp;&nbsp;<a href="phone: (11) 1234-5678">(11) 1234-5678</a></p>
    <p className="loja-endereço">Rua Teste, 2022 - Pimentas</p>
    <p className="loja-cidade">Guarulhos/SP - 34555-222</p>
  </div>
);

export default DadosDaLoja;