import PlayersList from '../components/PlayersList';
import {Link, useParams} from "react-router-dom";
import Create from './Create';

const Main = (props) => {
    const {loaded, players, removeFromDom}=props;


    return (
    <div>
        <div>
        <Link to="/players/list">List</Link> | <Link to="/players/addplayer"> Add Player </Link>
        </div>
        <PlayersList players={players} removeFromDom={removeFromDom}/>
    </div>
    )
}

export default Main