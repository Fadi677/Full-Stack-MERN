import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    //keep track of what is being typed via useState hook
    const { initialTitle, initialPrice, initialDescription, addProduct} = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    //handler when the form is submitted
    const onSubmitHandler = e => {
        
        e.preventDefault();
        // make a post request to create a new product
        // axios.post('http://localhost:8000/api/product', {
        //     title,
        //     price,
        //     description
        // })
            // .then(res=>console.log(res))
            // .then(props.addProduct({title, price, description}))
            // .catch(err=>console.log(err))
            addProduct({title, price, description});
            clearState()
    }

    const clearState=()=>{
        setTitle("");
        setPrice("");
        setDescription("");
    }
    //onChange to update title price and discription
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Discription: </label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}