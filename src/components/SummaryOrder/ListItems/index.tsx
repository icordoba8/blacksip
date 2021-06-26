import React, { useCallback, useEffect } from "react";
import { ProductService } from "../../../services/products";
import Item from "../Item";
const ListItems = ({ products, setProduts }: any) => {
  const listProducts = useCallback(async () => {
    const { data, error } = await ProductService.getProducts();
    if (error) {
      return;
    }
    setProduts(data);
  }, [setProduts]);

  useEffect(() => {
    listProducts();
  }, [listProducts]);

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
