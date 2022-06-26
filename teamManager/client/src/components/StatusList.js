import React from 'react'
import StatusListRow from './StatusListRow'
import {Link, useParams} from "react-router-dom";
import '../Style.css';

const StatusList = (props) => {

    const {gameNum, updatePlayer} = props;

    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>Player</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
        {props.players.length>0 && props.players.map( (player, i) =>{
        return(
        <StatusListRow id="tRow" updatePlayer={updatePlayer} gameNum={gameNum} player={player} key={i}/>
        )}
    )}
        </tbody>
        </table>
    </div>
    )
}

export default StatusList