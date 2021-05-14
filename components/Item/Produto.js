import React, { Component } from "react";
import Link from "next/link";

import { formatMoney } from "../../utils";
import { baseImg } from "../../config";

class Produto extends Component {
  render() {
    const { item, porLinha } = this.props;
    const { productId, variationName, productName, salesPrice, offerPrice, images } = item; 

    const temPromo = offerPrice && salesPrice !== offerPrice;
    return (
      <Link href={`/product/${productName}?id=1`}>
        <div
          className={`produto   flex-1 flex vertical wrap-${porLinha} wrap-2-mb`}
        >
          <div className="produto-image flex flex-center">
            <img
              src={`${images}`} // ajuste
              alt={variationName || productName}
              style={{ maxWidth: "95%" }}
            />
          </div>
          <div className="produto-title flex flex-center">
            <h3>{variationName || productName}</h3>
          </div>
          <br />
          <div
            className={`produto-preco ${
              temPromo ? "produto-por" : ""
            } flex flex-center`}
          >
            <h2>{formatMoney(salesPrice)}</h2>
            {/* <h2>{salesPrice}</h2> */}
          </div>
          {temPromo && (
            <div className={`produto-preco-promocao flex flex-center`}>
              <h2>{formatMoney(offerPrice)}</h2>
              {/* <h2>{offerPrice}</h2> */}
            </div>
          )}
          <div className={`produto-preco-parcelado flex flex-center`}>
            {/* <h4>ou 6x de {formatMoney((temPromo ? promotion : salesPrice) / 6)} sem juros</h4> */}
          </div>
        </div>
      </Link>
    );
  }
}

export default Produto;
