import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AuthorsForm = (props) => {
    // const { addAuthor, initialName } = props;
    const { initialAuthor, submit } = props;
    const [name, setName] = useState(initialAuthor.name);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        props.submit(name).catch(err=>{
            const errorResponse = err.response.data.errors.name.message;
            console.log(errorResponse);
            const errorArr=[];
            errorArr.push(errorResponse);
          //     for(const key of Object.keys(errorResponse)){
          //     errorArr.push(errorResponse[key].name.message)
          // }
            // if(name.length<3){
            //     alert('author name should have at least 3 characters')
            // return}
            setErrors(errorArr)});
    }

    // const onSubmitHandler = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/author', {name: name})
    //     .then(res=>{
    //         props.addAuthorToDom(res.data)
    //         history.push("/");
    // })
    //     .catch(err=>{
    //     const errorResponse = err.response.data.errors.name.message;
    //     console.log(errorResponse);
    //     const errorArr=[];
    //     errorArr.push(errorResponse);
    // //     for(const key of Object.keys(errorResponse)){
    // //     errorArr.push(errorResponse[key].name.message)
    // // }
    //     // if(name.length<3){
    //     //     alert('author name should have at least 3 characters')
    //     // return}
    //     setErrors(errorArr)})
    // }
    
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <p>
                <label>Name: </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default AuthorsForm