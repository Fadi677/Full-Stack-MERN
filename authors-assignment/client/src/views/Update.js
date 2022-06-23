import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthorsForm from '../components/AuthorsForm';
import {Link} from "react-router-dom";

const Update = (props) => {
  const history=useHistory();
  const {id}=useParams();
  const [loaded, setLoaded] = useState(false);
  const [thisAuthor, setThisAuthor]=useState("");

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors/' + id)
        .then(res => {
          console.log(res);
          setThisAuthor(res.data.name)
          setLoaded(true);
        })
}, []);


  const updateAuthor=(theAuthor)=>{
    console.log(theAuthor)
    return axios.put('http://localhost:8000/api/authors/' + id + '/edit', {name: theAuthor})
            .then(res => console.log(res))
            .then(history.push('/'))
            .catch(err=>console.error(err))
  }

  return (
    <div>
      <h2>Edit Author</h2>
      <Link to="/"> Home </Link>
      {loaded && (<AuthorsForm submit={updateAuthor}
      initialAuthor={{name: thisAuthor}}/>)}
    </div>
  )
}

export default Update