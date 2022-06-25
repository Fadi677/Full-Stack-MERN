import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Main from './views/Main';
import Create from './views/Create';
import PlayerStatus from './views/PlayerStatus';

function App() {
  const [players, setPlayers]=useState([]);
  const [loaded, setLoaded]=useState(false);

  const removeFromDom = playerId => {
    setPlayers(players.filter(player => player._id != playerId));
  }

  const addPlayerToDom=playerObject=>{
    setPlayers([...players, playerObject]);
  }

  const updatePlayer = player =>{
    let i = players.findIndex(p => p._id == player._id)
    console.log(players)
    let newList = [...players]
    newList[i] = {...player}
    console.log(newList)
    setPlayers(newList)
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/api/players')
    .then(res=>{
      setPlayers(res.data);
      setLoaded(true);
    })
    .catch(err=>console.error(err));
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
      <h1>
        <Link to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link>
      </h1>
        <Switch>
          <Route exact path="/players/list">
            <Main loaded={loaded} players={players} removeFromDom={removeFromDom} />
          </Route>
          <Route exact path="/players/addplayer">
            <Create addPlayerToDom={addPlayerToDom}/> 
          </Route>
          <Route path="/status/game/:num">
            <PlayerStatus updatePlayer={updatePlayer} players={players}/> 
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
