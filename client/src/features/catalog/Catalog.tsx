import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import apiAgent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";


export default function Catalog(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
    apiAgent.Catalog.list()
    .then(products => setProducts(products) )
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
    },[])

    if(loading) return <LoadingComponent message="Loading Products...."/>
    return(
        <div>
           <ProductList products={products} />
        </div>
    )
}