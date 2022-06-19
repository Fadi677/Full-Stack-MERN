import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import ViewProduct from './views/ViewProduct';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/api/products/:id">
          <ViewProduct />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

    
export default App;