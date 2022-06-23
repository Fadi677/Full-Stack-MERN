import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProductForm from '../components/ProductForm';

const Update = (props) => {
    const history=useHistory();
    const {id}=useParams();
    const [loaded, setLoaded] = useState(false);
    // const [title, setTitle] = useState(""); 
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    const [thisProduct, setThisProduct]=useState();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                // setTitle(res.data.title);
                // setPrice(res.data.price);
                // setDescription(res.data.description)
                setThisProduct(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updateProduct = (pProduct, e) => {
        
        axios.put('http://localhost:8000/api/products/' + id + '/edit', pProduct)
            .then(res => console.log(res))
            .then(setThisProduct(thisProduct))
            .then(history.push('/'))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && <ProductForm addProduct={updateProduct}
            initialTitle={thisProduct.title}
            initialPrice={thisProduct.price}
            initialDescription={thisProduct.description}/>}
        </div>
    )
}
    
export default Update;

