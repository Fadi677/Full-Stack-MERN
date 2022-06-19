import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ViewProduct = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => setProduct(res.data))
            .then(console.log(product))
            .catch(err => console.error(err));
    }, [id]);
    
    return (
        <div>
            <h1>{product.title}</h1>
            <h2>Product Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
        </div>
    )
}
    
export default ViewProduct;