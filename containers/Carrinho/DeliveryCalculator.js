import React, { Component } from "react";
import FormSimples from "../../components/Inputs/FormSimples";

class DeliveryCalculator extends Component {
  render() {
    return (
      <div className="delivery-calculator">
             <FormSimples
                label=""
                value={""}
                name=""
                type="text"
                placeholder=""
                // onChange={(e) => this.onChangeInput("telefone", e.target.value)}
              />
        <button>Ok</button>
      </div>
    );
  }
}

export default DeliveryCalculator;
