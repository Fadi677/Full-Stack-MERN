import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import DeleteButton from './DeleteButton';

const PlayersList = (props) => {
    const {removeFromDom}=props;
    const history=useHistory();

    return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Player</th>
                <th>Prefereed Position</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
        {props.players.length>0 && props.players.map( (player, i) =>{
        return(
        <tr key={i}>
            <td>{player.playerName}</td>
            <td>{player.preferredPosition}</td>
            <td><DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/></td>
        </tr>
        )}
    )}
        </tbody>
        </table>
    </div>
    )
}

export default PlayersList