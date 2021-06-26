import React, { useState } from "react";

import ListItems from "./ListItems";
import useSumaryOder from "../hooks/sumaryOrder";
import "./styles.sass";
import NumberFormat from "../utils/NumberFormat";
const SummaryOrder = () => {
  const [products, setProduts] = useState([]);
  const [total] = useSumaryOder(products);

  return (
    <div className="container-sumary-order">
      <div className="container-sumary-title">
        <h3>RESUMEN DE LA ORDEN</h3>
      </div>
      <ListItems products={products} setProduts={setProduts} />
      <div className="container-sumary-edit">
        <button className="button btn-danger">Editar</button>
      </div>
      <div className="container-sumary-subtotal">
        <div>
          <p>SUBTOTAL</p>
          <p className="shipping-calculated">ENVÍO</p>
        </div>
        <div>
          <p>{NumberFormat(total)}</p>
          <p className="shipping-calculated">A calcular</p>
        </div>
      </div>
      <div className="container-sumary-total">
        <div>
          <p>TOTAL</p>
        </div>
        <div>
          <p>{NumberFormat(total)}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryOrder;
