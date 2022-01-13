import React from "react";

import './app-header.css';

const AppHeader = ({like,allPosts}) => {
    return (
        <div className="app-header d-flex" >
            <h1>Mazur Andrii</h1>
            <h2>{allPosts} постів , з них сподобалось {like}</h2>
        </div>
    )
}

export default AppHeader;