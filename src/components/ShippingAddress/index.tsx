import React from "react";
import FormAddress from "./FormAddress";
import "./styles.sass";
const ShippingAddress = () => {
  return (
    <div className="container-shipping-address">
      <div className="shipping-address">
        <div className="shipping-address-title">
          <h3>DIRECCIÓN DE ENVÍO</h3>
        </div>
        <FormAddress />
      </div>
    </div>
  );
};

export default ShippingAddress;
