import axios from 'axios'
import React, {useState} from 'react'

const StatusListRow = (props) => {
    const{gameNum, player, updatePlayer}=props;

    let btn1Initial = 'grey'
    let btn2Initial = 'grey'
    let btn3Initial = 'grey'

    let chosenBtn
    let game
    switch(gameNum){
        case '1': game = player.status1
        break;
        case '2' : game = player.status2
        break;
        case '3' : game = player.status3
        break;
    }

    if(game == 'Playing'){
        btn1Initial = 'green'
    }else if (game == 'Not Playing'){
        btn2Initial = 'red'
    } else if (game == 'Undecided'){
        btn3Initial = 'yellow'
    }

    const [btn1, setBtn1] = useState(btn1Initial)
    const [btn2, setBtn2] = useState(btn2Initial)
    const [btn3, setBtn3] = useState(btn3Initial)

    const statusHandler=(e)=>{
        let newPlayer;
        let color = 'yellow';
        switch(gameNum){
            case '1': newPlayer = {status1: e.target.value}
            break;
            case '2': newPlayer = {status2: e.target.value}
            break;
            case '3': newPlayer = {status3: e.target.value}
            break;
            default: newPlayer = {};
        }
        newPlayer._id = player._id
        console.log("--------", newPlayer)
        axios.put('http://localhost:8000/api/players/'+player._id+'/edit', newPlayer).then( res => {
            console.log(res)
            updatePlayer(res.data)
        // switch(e.target.value){
        //         case 'Playing': setBtn1('green')
        //                         setBtn2('grey')
        //                         setBtn3('grey')
        //         break;
        //         case 'Not Playing': setBtn1('grey')
        //                             setBtn2('red')
        //                             setBtn3('grey')
        //         break;
        //         case 'Undecided': setBtn1('grey')
        //                             setBtn2('grey')
        //                             setBtn3('yellow')
        //     }
        }
        )
        .catch(e => {console.log(e)})
    }

    return (
        <tr>
            <td>{props.player.playerName}</td>
            <td><button value='Playing' style={{background:btn1}} onClick={statusHandler}>Playing</button> <button value='Not Playing' style={{background:btn2}} onClick={statusHandler}>Not Playing</button> <button value='Undecided' style={{background:btn3}} onClick={statusHandler}>Undecided</button></td>
        </tr>
    )
}

export default StatusListRow