import React from "react";
import { Typography } from "@mui/material";
export const MaterialUI = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom={true}>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">h5 Heading</Typography>
      <Typography variant="subtitle2">h6 Heading</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem rem
        fugit ratione fugiat commodi, doloremque voluptates maiores rerum vel
        minima laboriosam adipisci odit in alias consequatur iure sed maxime
        accusamus.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officiis
        at hic possimus ex optio, recusandae vel autem culpa voluptatum sunt
        natus modi. Repudiandae eaque placeat culpa totam modi quo.
      </Typography>
    </div>
  );
};
