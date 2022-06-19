import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ProductList = (props) => {
    const history = useHistory();
    const goTo=(e)=>{
        {props.products.map((product, i)=>history.push("/api/products/"+product._id))}
    }
    return (
        <div>
            {props.products.map( (product, i) =>
                <p key={i} onClick={(e)=>goTo()}>{product.title}</p>
            )}
        </div>
    )
}

export default ProductList;