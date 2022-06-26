import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import StatusList from '../components/StatusList';

const PlayerStatus = (props) => {
    const {loaded, players, updatePlayer}=props;
    const {num}=useParams();
    const [ID, setID]=useState(num)

    return (<div>
                <h2>PlayerStatus - Game {num}</h2>
                <div><a href="/status/game/1">Game 1</a> | <a href="/status/game/2">Game 2</a> | <a href="/status/game/3">Game 3</a></div>
                <StatusList updatePlayer={updatePlayer} gameNum={num} players={players}/>
            </div>
    )
}


export default PlayerStatus