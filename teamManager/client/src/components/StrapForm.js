import React, { useState } from 'react';
import { Button, FormGroup, Form, Input, Label } from 'reactstrap';

const StrapForm = (props) => {
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
        <div>
    <Form inline onSubmit={onSubmitHandler}>
    <FormGroup floating>
    {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
        <Input 
        onChange={(e)=>setPlayerName(e.target.value)} value={playerName}
        id="exampleEmail"
        name="email"
        placeholder="Player Name"
        type="text"
        />
        <Label for="exampleEmail">
        Player Name
        </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
        <Input 
        onChange={(e)=>setPreferredPosition(e.target.value)} value={preferredPosition}
        id="examplePassword"
        name="password"
        placeholder="Password"
        type="text"
        />
        <Label for="examplePassword">
        Preferred Position
        </Label>
    </FormGroup>
    {' '}
    <Button type="submit" color="danger">
        Submit
    </Button>
    </Form>
    </div>
    )
}

export default StrapForm