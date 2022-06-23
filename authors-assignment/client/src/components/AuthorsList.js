import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import DeleteButton from './DeleteButton';

const AuthorsList = (props) => {
    const {removeFromDom}=props;
    const history=useHistory();

    // const deleteAuthor=(id)=>{
    //     axios.delete('http://localhost:8000/api/authors/'+id+'/delete')
    //     .then(res=>{
    //         successCallback();
    //     })
    // }

    return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Author</th>
                <th>Available Actions</th>
            </tr>
            </thead>
            <tbody>
        {props.authors.length>0 && props.authors.map( (author, i) =>{
        return(
        <tr key={i}>
            <td>{author.name}</td>
            <td><button onClick={()=>history.push("/edit/"+author._id)}>Edit</button> || <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/></td>
        </tr>
        )}
    )}
        </tbody>
        </table>
    </div>
    )
}

export default AuthorsList