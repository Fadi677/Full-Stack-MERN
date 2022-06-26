import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormGroup, Form } from 'reactstrap';

const TeamForm = (props) => {
    const { initialPlayer, submit } = props;
    const [playerName, setPlayerName] = useState(initialPlayer.playerName);
    const [preferredPosition, setPreferredPosition] = useState(initialPlayer.preferredPosition);
    const [errors, setErrors] = useState([]);

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
        <div style={{width: 800}}>
        <Form inline onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <label>Player Name: </label><br/>
                <input type="text" onChange={(e)=>setPlayerName(e.target.value)} value={playerName}/>
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <label>Preferred Position: </label><br/>
                <input type="text" onChange={(e)=>setPreferredPosition(e.target.value)} value={preferredPosition}/>
                </FormGroup>
            <Button type="submit" color="success">Add</Button>
        </Form>
        </div>
    )
}

export default TeamForm