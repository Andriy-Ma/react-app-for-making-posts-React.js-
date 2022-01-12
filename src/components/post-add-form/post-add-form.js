import React from "react";

import './post-add-form.css';

const PostAddForm = () =>{
    return(
        <form className="bottom-panel d-flex">
            <input type="text"
            placeholder="Про що думаєте"
            className="form-control new-post-label"
            />
            <button
            type="submiе"
            className="btn btn-outline-secondary">Додати</button>
        </form>
    )
}

export default PostAddForm ;