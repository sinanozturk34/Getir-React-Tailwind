import { useState,useEffect } from "react";
import Title from "./UI/Title"
import Products from "api/products.json";
import ProductItem from "./UI/ProductItem";

export default function Favorites() {

  const [products,setProducts] = useState([]); 
  

  useEffect(() => {
      setProducts(Products);
  },[])
  return (
    <div>
      <Title>Favorites</Title>
      <div className="grid grid-cols-8 gap-1 rounded-lg overflow-hidden"> 
          {
            products.length && products.map((product,index) => <ProductItem key={index} product={product}/>)
          }
      </div>
      </div>
  )
}
