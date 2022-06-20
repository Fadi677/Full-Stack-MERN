import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


const Main = (props) => {
    // const [products, setProducts] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    const {removeFromDom, products, loaded}=props;

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/products')
    //         .then(res=>{
    //             setProducts(res.data);
    //             setLoaded(true);
    //         })
    //         .catch(err => console.error(err));
    // },[]);

    

    return (
        <div>
            <ProductForm addProduct={props.addProduct}/>
            <hr/>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;