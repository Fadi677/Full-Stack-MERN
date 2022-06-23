import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const history = useHistory();

    // const deleteProduct = (productId) => {
    //     axios.delete("http://localhost:8000/api/products/" + productId+"/delete")
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    //         .then(history.push("/"))
    //         .catch(err => console.error(err));
    // }

    // const goTo=(e)=>{
    //     {props.products.map((product, i)=>history.push("/api/products/"+product._id))}
    // }
    
    const goTo=(id)=>{
        console.log("***************")
        console.log("/api/products/"+id)
        history.push("/products/"+id)
    }

    return (
        <div>
            {props.products.map( (product, i) =>
            <div key={i}>
                <p onClick={(e)=>goTo(product._id)}>{product.title}</p>
                <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
            </div>
    )}
        </div>
    )
}

export default ProductList;