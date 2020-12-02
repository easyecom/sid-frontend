import React, { Component } from 'react';
import Link from 'next/link';

import { formatMoney } from '../../utils';
import { baseImg } from '../../config';

class Produto extends Component {
  render() {
    const { item, porLinha } = this.props;
    const { variationId, title, salesPrice, promotion, name } = item;
    const temPromo = promotion && salesPrice !== promotion;
    return (
      <Link href={`/product/${title}?produto=${variationId}`}>
        <div className={`produto flex-1 flex vertical wrap-${porLinha} wrap-2-mb`}>
          <div className="produto-image flex flex-center">
            <img
              src={`${baseImg}${name}`} alt={title} style={{ maxWidth: "95%" }} />
          </div>
          <div className="produto-title flex flex-center">
            <h3>{title}</h3>
          </div>
          <br />
          <div className={`produto-preco ${temPromo ? "produto-por" : ""} flex flex-center`}>
            {/* <h2>{formatMoney(salesPrice)}</h2> */}
            <h2>{salesPrice}</h2>
          </div>
          {temPromo && (
              <div className={`produto-preco-promocao flex flex-center`}>
                {/* <h2>{formatMoney(promotion)}</h2> */}
                <h2>{promotion}</h2>
              </div>
           )
          }
          <div className={`produto-preco-parcelado flex flex-center`}>
                {/* <h4>ou 6x de {formatMoney((temPromo ? promotion : salesPrice) / 6)} sem juros</h4> */}
              </div>
          </div>
      </Link>
    );
  };
};

export default Produto;