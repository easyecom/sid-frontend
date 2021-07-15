import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
  <div className="Beneficios">
    <div className="container flex horizontal-mb wrap-mb">
      <ItemBeneficio
        icone="fa-truck"
        texto="frete gratuito"
        paragrafo="Acima de R$100" />
      <ItemBeneficio
        icone="fa-dollar"
        texto="sem juros"
        paragrafo="A partir de R$ 100" />
      <ItemBeneficio
        icone="fa-home"
        texto="loja fisica" 
        paragrafo="Troque na loja" />
      <ItemBeneficio
        icone="fa-refresh"
        texto="troca grátis" 
        paragrafo="Em até 30 dias" />
    </div>
  </div>
);

export default Beneficios;