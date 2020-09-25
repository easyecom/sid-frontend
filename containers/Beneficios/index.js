import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
  <div className="Beneficios">
    <div className="container flex horizontal horizontal-mb wrap-mb">
      <ItemBeneficio
        icone="fa-truck"
        texto="FRETE GRATIS | acima de R$100" />
      <ItemBeneficio
        icone="fa-globe"
        texto="EM 12X SEM JUROS | PARA TODO O SITE" />
      <ItemBeneficio
        icone="fa-home"
        texto="LOJA FISICA | troque na loja" />
      <ItemBeneficio
        icone="fa-dollar"
        texto="GANHE R$20 | na primeira compra" />
    </div>
  </div>
);

export default Beneficios;