import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const TeamForm = (props) => {
    const { initialPlayer, submit } = props;
    const [playerName, setPlayerName] = useState(initialPlayer.playerName);
    const [preferredPosition, setPreferredPosition] = useState(initialPlayer.preferredPosition);
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        submit(playerName, preferredPosition).catch(err=>{
            const errorResponse = err.response.data.errors.playerName.message;
            console.log(errorResponse);
            const errorArr=[];
            errorArr.push(errorResponse);
            setErrors(errorArr)});
    }

    
    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <p>
                <label>Player Name: </label><br/>
                <input type="text" onChange={(e)=>setPlayerName(e.target.value)} value={playerName}/>
            </p>
            <p>
                <label>Preferred Position: </label><br/>
                <input type="text" onChange={(e)=>setPreferredPosition(e.target.value)} value={preferredPosition}/>
            </p>
            <input type="submit" value="Add"/>
        </form>
        </div>
    )
}

export default TeamForm