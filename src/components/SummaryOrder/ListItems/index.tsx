import React, { useEffect, useState } from "react";
import { ProductService } from "../../../services/products";
import Item from "../Item";
const ListItems = ({ products, setProduts }: any) => {
  useEffect(() => {
    listProducts();
  }, []);

  const listProducts = async () => {
    const { data, error } = await ProductService.getProducts();
    if (error) {
      return;
    }
    setProduts(data);
  };

  return (
    <>
      {products.map((product: any, key: any) => (
        <Item
          key={key}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </>
  );
};

export default ListItems;
