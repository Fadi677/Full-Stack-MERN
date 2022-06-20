import React, {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import ViewProduct from './views/ViewProduct';
import Update from './views/Update';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId));
}

useEffect(()=>{
  axios.get('http://localhost:8000/api/products')
      .then(res=>{
          setProducts(res.data);
          setLoaded(true);
      })
      .catch(err => console.error(err));
},[products]);

  const addProduct=(productObject)=>{
    setProducts([...products, productObject])
  }

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main  removeFromDom={removeFromDom} products={products} loaded={loaded} 
            addProduct={addProduct}/>
        </Route>
        <Route exact path="/api/products/:id">
          <ViewProduct removeFromDom={removeFromDom}/>
        </Route>
        <Route exact path="/api/products/:id/edit">
          <Update />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;