import React from "react";
import PostListItem from '../post-list-item';
import {ListGroup} from "reactstrap";
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike }) =>{
        const elements = posts.map((item) =>{
        const {id, ...itemProps} = item;
        return(
            <li key={id} className="list-group-item">
                <PostListItem  
                label={itemProps.label}
                important={itemProps.important}
                like = {itemProps.like}
                onDelete={() => onDelete(id)} 
                onToggleImportant={()=> onToggleImportant(id)}
                onToggleLike={()=> onToggleLike(id)}
                />
            </li>
        )
    });

    return(
        <ListGroup className="app-list " >
            {elements}
        </ListGroup>
    )
}

export default PostList;