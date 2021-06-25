import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "../CustomImputs/Input";
import "./styles.sass";
const ShippingAddress = () => {
  return (
    <div className="container-shipping-address">
      <div className="shipping-address">
        <div className="shipping-address-title">
          <h3>DIRECCIÓN DE ENVÍO</h3>
        </div>
        <Input icon={faUser} />
      </div>
    </div>
  );
};

export default ShippingAddress;
