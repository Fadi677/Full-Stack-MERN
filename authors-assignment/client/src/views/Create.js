import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import AuthorsForm from '../components/AuthorsForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = (props) => {
const {addAuthorToDom} =props
const history=useHistory();
const createAuthor = (name) => {
  return axios.post('http://localhost:8000/api/author', {name: name})
  .then(res=>{
      props.addAuthorToDom(res.data)
      history.push("/");
})
//   .catch(err=>{
//   const errorResponse = err.response.data.errors.name.message;
//   console.log(errorResponse);
//   const errorArr=[];
//   errorArr.push(errorResponse);
// //     for(const key of Object.keys(errorResponse)){
// //     errorArr.push(errorResponse[key].name.message)
// // }
//   // if(name.length<3){
//   //     alert('author name should have at least 3 characters')
//   // return}
//   setErrors(errorArr)})
}
  
  return (
    <div>
      <h2>Add New Author</h2>
      <Link to="/"> Home </Link>
      {/* <AuthorsForm initialName="" addAuthor={addThisAuthor}/> */}
      <AuthorsForm submit={createAuthor} initialAuthor={{name:""}} />
    </div>
  )
}

export default Create