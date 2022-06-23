import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import Main from './views/Main';
import Update from './views/Update';
import Create from './views/Create';

function App() {
  const [authors, setAuthors]=useState([]);
  const [loaded, setLoaded] = useState(false);
  // const [errors, setErrors] = useState([]);
  
  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id != authorId));
  }

  const addAuthorToDom=authorObject=>{
    setAuthors([...authors, authorObject]);
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors')
    .then(res=>{
      setAuthors(res.data);
      setLoaded(true);
    })
    .catch(err=>console.error(err));
  },[]);

  // const addAuthor=(authorObject)=>{
  //   axios.post('http://localhost:8000/api/author', authorObject)
  //   .catch(err=>{
  //     const errorResponse = err.response.data.errors;
  //     console.log(err.response.data.errors.name.message);
  //   const errorArr=[];
  // for(const key of Object.keys(errorResponse)){
  //   errorArr.push(errorResponse[key].message)
  // }
  //   setErrors(errorArr)})
  // }

  return (
    <BrowserRouter>
      <div className="App">
      <h1>
        Favorite Authors
      </h1>
        <Switch>
          <Route exact path="/">
            <Main loaded={loaded} authors={authors} removeFromDom={removeFromDom} />
          </Route>
          <Route exact path="/new">
            <Create addAuthorToDom={addAuthorToDom}/> 
          </Route>
          <Route exact path="/edit/:id">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;