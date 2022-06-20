import React, {useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ProductList = (props) => {
    const { removeFromDom } = props;
    const history = useHistory();

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/products/" + productId+"/delete")
            .then(res => {
                removeFromDom(productId)
            })
            .then(history.push("/"))
            .catch(err => console.error(err));
    }

    // const goTo=(e)=>{
    //     {props.products.map((product, i)=>history.push("/api/products/"+product._id))}
    // }
    const goTo=(id)=>{
        console.log("***************")
        console.log("/api/products/"+id)
        history.push("/api/products/"+id)
    }

    return (
        <div>
            {props.products.map( (product, i) =>
            <div key={i}>
                <p onClick={(e)=>goTo(product._id)}>{product.title}</p>
                <button onClick={(e)=>deleteProduct(product._id)}>Delete</button>
            </div>
    )}
        </div>
    )
}

export default ProductList;