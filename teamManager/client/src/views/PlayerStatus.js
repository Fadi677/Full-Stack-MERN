import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import StatusList from '../components/StatusList';

const PlayerStatus = (props) => {
    const {loaded, players, updatePlayer}=props;
    const {num}=useParams();
    const [ID, setID]=useState(num)

    return (<div style={{marginTop:10}}>
                <h2 style={{marginTop:10, color:"red"}}>PlayerStatus - Game {num}</h2>
                <div style={{marginTop:10}}><a href="/status/game/1">Game 1</a> | <a href="/status/game/2">Game 2</a> | <a href="/status/game/3">Game 3</a></div>
                <StatusList updatePlayer={updatePlayer} gameNum={num} players={players}/>
            </div>
    )
}


export default PlayerStatus