import * as React from 'react';
import { useEffect, useState } from "react";
import Item from "./Item";
import productsData from "../data/productsData";

const ItemList = () => {
    const [products, setProducts] = useState([])  
    const [loading, setLoading] = useState(true) 
    useEffect(() => {     
    setTimeout(() => {
        new Promise((resolve, reject) => {
        resolve(productsData)        
        })
        .then((res) => setProducts(res))
        .then(() => setLoading(false)) 
    }, 2000); 
    }, [])  
    return (
    (loading !== false) ?
        <div>
            <></>
        </div> :
        <div>     
            {productsData.map(product => (
                <div>        
                    <Item key={product.id} product={product} initial={1} stock={5} />
                </div>
            ))}
        </div>    
    )
}

export default ItemList