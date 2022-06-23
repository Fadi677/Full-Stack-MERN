import AuthorsList from '../components/AuthorsList';
import {Link, useParams} from "react-router-dom";

const Main = (props) => {
  const {loaded, authors, removeFromDom}=props;


  return (
    <div>
      <div>
        <Link to="/new"> Add an Author </Link>
      </div>
      <AuthorsList authors={authors} removeFromDom={removeFromDom}/>
    </div>
  )
}

export default Main