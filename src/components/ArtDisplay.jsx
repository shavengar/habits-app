import React from "react";

const ArtDisplay = ({ art }) => {
    console.log(art);
    return (
        <div>
            <div>
                <img src={art.url} alt="artwork" />
                <h3>{art.title}</h3>
            </div>
        </div>
    );
};

export default ArtDisplay;
