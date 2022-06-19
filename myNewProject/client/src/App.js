import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
    
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/people/">
            <Main />
          </Route>
          <Route path="people/:id">
            <Detail />
          </Route>
          <Route path="/people/:id/edit">
            <Update />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
    
export default App;