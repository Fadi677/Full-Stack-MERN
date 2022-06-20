import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';
    
const ViewProduct = (props) => {
    const history=useHistory();
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { removeFromDom } = props;
    const goTo=(e)=>{
        {history.push("/api/products/"+id+"/edit")}
    }
    
    // const deleteThis = (productId) => {
    //     axios.delete("http://localhost:8000/api/products/" + productId+ "/delete")
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    //         .then(history.push("/"))
    //         .catch(err => console.error(err));
    // }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => setProduct(res.data))
            .then(console.log(product))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h1>{product.title}</h1>
            <h2>Product Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <p onClick={goTo}>Edit</p>
            <DeleteButton productId={product._id} successCallback={()=>history.push("/")}/>
        </div>
    )
}
    
export default ViewProduct;