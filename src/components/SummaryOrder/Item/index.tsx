import React from "react";
import NumberFormat from "../../utils/NumberFormat";
import "./styles.sass";
const Item = (props: any) => {
  const { name, price, image } = props;
  return (
    <div className="container-product">
      <div className="container-product-item">
        <img src={image} alt="" />
      </div>
      <div className="container-product-item">{name}</div>
      <div className="container-product-item">
        <strong>{NumberFormat(price)}</strong>
      </div>
    </div>
  );
};

export default Item;
