import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

interface Props{
    product: Product[];
}
export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{
      fetch('http://localhost:5109/api/product')
      .then(response => response.json())
      .then(data => setProducts(data))
    },[])
    return(
        <div>
           <ProductList products={products} />
        </div>
    )
}