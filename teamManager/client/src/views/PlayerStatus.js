import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import StatusList from '../components/StatusList';

const PlayerStatus = (props) => {
    const {loaded, players, updatePlayer}=props;
    const {num}=useParams();
    const [ID, setID]=useState(num)

    return (<div>
                <h2>PlayerStatus - Game {num}</h2>
                <div><Link to="/status/game/1">Game 1</Link> | <Link to="/status/game/2">Game 2</Link> | <Link to="/status/game/3">Game 3</Link></div>
                <StatusList updatePlayer={updatePlayer} gameNum={num} players={players}/>
            </div>
    )
}


export default PlayerStatus