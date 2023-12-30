import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import { publicRequest, userRequest } from "../Request";
import { productsList } from "../productData";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  // console.log(cat, filter,sort);

  // const [products, setProducts] = useState([]);
  const products = productsList;
  const [filterProducts, setFilterProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await publicRequest.get(
  //         cat
  //           ? `/product?category=${cat}`
  //           : "/product"
  //       );
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
