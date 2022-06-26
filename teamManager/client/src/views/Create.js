import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import TeamForm from '../components/TeamForm';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import StrapForm from '../components/StrapForm';

const Create = (props) => {
const {addPlayerToDom} =props
const history=useHistory();
const createPlayer = (playerName, preferredPosition) => {
    return axios.post('http://localhost:8000/api/players/addplayer', {playerName: playerName, preferredPosition: preferredPosition})
    .then(res=>{
        addPlayerToDom(res.data)
        console.log(res.data.gameOne)
        history.push("/players/list");
})
}

    return (
    <div>
        <h2>Add Player</h2>
        <Link to="/players/list">Manage Players</Link> | <Link to="/status/game/1">Manage Player Status</Link>
        <StrapForm submit={createPlayer} initialPlayer={{playerName:"", preferredPosition:""}} />
    </div>
    )
}

export default Create