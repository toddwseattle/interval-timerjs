import React from "react";
import { Typography } from "@material-ui/core";

export default function CenterH3({
  children,
  lastTimeStyle = { color: "red" }
}) {
  return (
    <Typography variant="h3" align="center" style={lastTimeStyle}>
      {children}
    </Typography>
  );
}
