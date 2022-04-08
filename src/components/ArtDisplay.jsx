import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const ArtDisplay = ({ art }) => {
  return (
    <ImageListItem key={art.id}>
      <img src={art.url} alt={art.long_title} />
      <ImageListItemBar title={art.title} />
    </ImageListItem>
  );
};

export default ArtDisplay;
